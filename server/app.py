from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
@app.route("/")
def home():
    return "Servidor Flask funcionando 😎"

products = [
    {
        "id": 1,
        "name": "Mouse Gamer",
        "image": "https://picsum.photos/300/200?1",
        "category": "Accesorios",
        "discount": 30,
        "precioOriginal": 120000
    },
    {
        "id": 2,
        "name": "Teclado RGB",
        "price": 250000,
        "image": "https://picsum.photos/300/200?2",
        "category": "Accesorios"
    },
    {
        "id": 3,
        "name": "Monitor Gamer",
        "price": 800000,
        "image": "https://picsum.photos/300/200?3",
        "category": "Monitores"
    },
    {
        "id": 4,
        "name": "Silla Gamer",
        "price": 950000,
        "image": "https://picsum.photos/300/200?4",
        "category": "Accesorios"
    },
    {
        "id": 5,
        "name": "Laptop RTX",
        "price": 4500000,
        "image": "https://picsum.photos/300/200?5",
        "category": "Computadores"
    },
    {
        "id": 6,
        "name": "Audifonos RGB",
        "price": 180000,
        "image": "https://picsum.photos/300/200?6",
        "category": "Audio"
    },
    {
        "id": 7,
        "name": "Webcam HD",
        "price": 140000,
        "image": "https://picsum.photos/300/200?7",
        "category": "Accesorios"
    },
    {
        "id": 8,
        "name": "Control Xbox",
        "price": 320000,
        "image": "https://picsum.photos/300/200?8",
        "category": "Consolas"
    },
    {
        "id": 9,
        "name": "Microfono USB",
        "price": 290000,
        "image": "https://picsum.photos/300/200?9",
        "category": "Audio"
    },
    {
        "id": 10,
        "name": "Tablet Android",
        "price": 700000,
        "image": "https://picsum.photos/300/200?10",
        "category": "Tablets"
    },
    {
        "id": 11,
        "name": "iPhone 15",
        "price": 5200000,
        "image": "https://picsum.photos/300/200?11",
        "category": "Celulares"
    },
    {
        "id": 12,
        "name": "Smartwatch",
        "price": 350000,
        "image": "https://picsum.photos/300/200?12",
        "category": "Wearables"
    }
]

@app.route("/products")
def get_products():

    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)