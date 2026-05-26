from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE = "https://images.unsplash.com/{id}?w=400&h=300&fit=crop&auto=format&q=80"

products = [
    # ── Con descuento ──────────────────────────────────────────────────────
    {
        "id": 1,
        "name": "Mouse Gamer Pro",
        "image": "https://assets1.ignimgs.com/2018/09/05/logitechgpro-1280-1536169299396_1280w.jpg",
        "category": "Accesorios",
        "discount": 30,
        "precioOriginal": 120000,
        "price": round(120000 * 0.70)
    },
    {
        "id": 5,
        "name": "Laptop RTX 4060",
        "image": "https://tse3.mm.bing.net/th/id/OIP.f-5dNPccOyXJ2Bc_3B1VCAHaGx?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Computadores",
        "discount": 15,
        "precioOriginal": 4500000,
        "price": round(4500000 * 0.85)
    },
    {
        "id": 6,
        "name": "Audífonos RGB 7.1",
        "image": "https://tse3.mm.bing.net/th/id/OIP.EMqm7MX4dWFopKwXD3WYfwHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Audio",
        "discount": 20,
        "precioOriginal": 180000,
        "price": round(180000 * 0.80)
    },
    {
        "id": 11,
        "name": "iPhone 15 128GB",
        "image": "https://tse3.mm.bing.net/th/id/OIP.F7cmiJYdWwFT_rN1PHDfjQHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Celulares",
        "discount": 10,
        "precioOriginal": 5200000,
        "price": round(5200000 * 0.90)
    },
    {
        "id": 13,
        "name": "Monitor Curvo 27\"",
        "image": "https://tse4.mm.bing.net/th/id/OIP.lbsJWOus2zhq7mTWsVFL8AHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Monitores",
        "discount": 25,
        "precioOriginal": 950000,
        "price": round(950000 * 0.75)
    },
    {
        "id": 14,
        "name": "PlayStation 5 Slim",
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566040_rd.jpg",
        "category": "Consolas",
        "discount": 12,
        "precioOriginal": 3200000,
        "price": round(3200000 * 0.88)
    },
    # ── Sin descuento ──────────────────────────────────────────────────────
    {
        "id": 2,
        "name": "Teclado Mecánico RGB",
        "price": 250000,
        "image": "https://tse4.mm.bing.net/th/id/OIP.CboqlJqfnUr45WW3kjsh1AHaFC?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Accesorios"
    },
    {
        "id": 3,
        "name": "Monitor Gamer 144Hz",
        "price": 800000,
        "image": "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/08/Asus-VG278QR-27----Gaming-Monitor-a.jpg",
        "category": "Monitores"
    },
    {
        "id": 4,
        "name": "Silla Gamer Ergonómica",
        "price": 950000,
        "image": "https://i5.walmartimages.com/asr/7ccfc989-4146-401b-91cb-db97847688b6.237fae1913a0c8f3b2830b728f73816b.jpeg",
        "category": "Accesorios"
    },
    {
        "id": 7,
        "name": "Webcam Full HD",
        "price": 140000,
        "image": "https://m.media-amazon.com/images/I/61+fX1ehJTL._AC_SL1500_.jpg",
        "category": "Accesorios"
    },
    {
        "id": 8,
        "name": "Control Xbox Series",
        "price": 320000,
        "image": "https://tse4.mm.bing.net/th/id/OIP.OmOPK-VtUoiuCSA4YWR_aQHaDs?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Consolas"
    },
    {
        "id": 9,
        "name": "Micrófono USB Condensador",
        "price": 290000,
        "image": "https://tse1.mm.bing.net/th/id/OIP.0cLJ3yCrAK0fIfg4i1kosQHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Audio"
    },
    {
        "id": 10,
        "name": "Tablet Android 10",
        "price": 700000,
        "image": "https://tse1.mm.bing.net/th/id/OIP.XNWIuxTRtnnHMb8EsX0HRgHaFx?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Tablets"
    },
    {
        "id": 12,
        "name": "Smartwatch Serie 3",
        "price": 350000,
        "image": BASE.format(id="photo-1546868871-7041f2a55e12"),
        "category": "Wearables"
    },
    {
        "id": 15,
        "name": "Samsung Galaxy S25",
        "price": 3800000,
        "image": "https://tse4.mm.bing.net/th/id/OIP.MWk4qAg8lTUzMSojspC9JwHaDV?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Celulares"
    },
    {
        "id": 16,
        "name": "iPad Air M2",
        "price": 2100000,
        "image": "https://tse3.mm.bing.net/th/id/OIP.56qdtCgbbECEN1TDr7TlKQHaD4?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Tablets"
    },
    {
        "id": 17,
        "name": "Macbook Pro 14",
        "price": 8489000,
        "image": "https://tse2.mm.bing.net/th/id/OIP.m2-vqur-55AnsnFU12bmLwHaEx?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
        "category": "Computadores"
    }
]

# ── Usuarios en memoria (demo) ─────────────────────────────────────────────
users = [
    {"id": 1, "name": "Admin", "email": "admin@stromper.co", "password": "admin123"}
]

@app.route("/")
def home():
    return "Servidor Flask funcionando 😎"

@app.route("/products")
def get_products():
    return jsonify(products)

from flask import request

@app.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")
    user = next((u for u in users if u["email"] == email and u["password"] == password), None)
    if user:
        return jsonify({"ok": True, "user": {"id": user["id"], "name": user["name"], "email": user["email"]}})
    return jsonify({"ok": False, "message": "Email o contraseña incorrectos"}), 401

@app.route("/auth/register", methods=["POST"])
def register():
    data = request.get_json()
    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")
    if not name or not email or not password:
        return jsonify({"ok": False, "message": "Todos los campos son requeridos"}), 400
    if any(u["email"] == email for u in users):
        return jsonify({"ok": False, "message": "Este email ya está registrado"}), 409
    new_user = {"id": len(users) + 1, "name": name, "email": email, "password": password}
    users.append(new_user)
    return jsonify({"ok": True, "user": {"id": new_user["id"], "name": new_user["name"], "email": new_user["email"]}})

if __name__ == "__main__":
    app.run(debug=True)