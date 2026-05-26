from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager,
    create_access_token
)

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

from db import get_connection

app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = "stromper_secret_key_2026"

jwt = JWTManager(app)


@app.route("/")
def home():
    return "Servidor Flask funcionando 😎"


# ==========================
# PRODUCTS
# ==========================
@app.route("/products")
def get_products():

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM products")

    products = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify(products)


# ==========================
# LOGIN
# ==========================
@app.route("/auth/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    query = """
        SELECT *
        FROM users
        WHERE email = %s
    """

    cursor.execute(query, (email,))
    user = cursor.fetchone()

    cursor.close()
    connection.close()

    if not user:
        return jsonify({
            "ok": False,
            "message": "Usuario no encontrado"
        }), 401

    # 🔥 Ahora compara el hash correctamente
    if not check_password_hash(
        user["password"],
        password
    ):
        return jsonify({
            "ok": False,
            "message": "Contraseña incorrecta"
        }), 401

    token = create_access_token(
        identity=str(user["id"])
    )

    return jsonify({
        "ok": True,
        "token": token,
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    })


# ==========================
# REGISTER
# ==========================
@app.route("/auth/register", methods=["POST"])
def register():

    data = request.get_json()

    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not name or not email or not password:
        return jsonify({
            "ok": False,
            "message": "Todos los campos son requeridos"
        }), 400

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM users WHERE email = %s",
        (email,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        cursor.close()
        connection.close()

        return jsonify({
            "ok": False,
            "message": "Este email ya está registrado"
        }), 409

    # 🔥 Encriptar contraseña
    hashed_password = generate_password_hash(password)

    query = """
        INSERT INTO users
        (name, email, password)
        VALUES (%s, %s, %s)
    """

    cursor.execute(
        query,
        (
            name,
            email,
            hashed_password
        )
    )

    connection.commit()

    user_id = cursor.lastrowid

    token = create_access_token(
        identity=str(user_id)
    )

    cursor.close()
    connection.close()

    return jsonify({
        "ok": True,
        "token": token,
        "user": {
            "id": user_id,
            "name": name,
            "email": email
        }
    })


if __name__ == "__main__":
    app.run(debug=True)