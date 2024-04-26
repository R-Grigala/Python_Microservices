from dataclasses import dataclass
import requests
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:Grigala27@db/main'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # Disable modification tracking

CORS(app)

db = SQLAlchemy(app)

@dataclass
class Product(db.Model):
    id: int
    title: str
    image: str
    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    title = db.Column(db.String(200))
    image = db.Column(db.String(200))

@dataclass
class ProductUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer)

    UniqueConstraint('user_id', 'product_id', name='user_product_unique')

@app.route('/api/products')
def index():
    return jsonify(Product.query.all())

@app.route('/api/products/<int:id>/like', methods=['POST'])
def like(id):
    try:
        req = requests.get('http://172.22.0.4:8000/api/user', timeout=10)  # Increase timeout to 10 seconds
        return jsonify(req.json())
    except requests.exceptions.Timeout:
        return "Connection timed out", 504
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
