// ProductsPage.jsx
import React from "react";

export default function ProductsPage() {
  const products = [
    {
      title: "Wireless Headphones",
      description: "Noise cancelling over-ear headphones",
      price: "$120",
      image:
        "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ=",
    },
    {
      title: "Smart Watch",
      description: "Smart wearable with health tracking",
      price: "$80",
      image:
        "https://t4.ftcdn.net/jpg/06/60/68/37/360_F_660683718_qo0q1V2RuLO56S7cu4VMb078m10U6WW8.jpg",
    },
    {
      title: "Laptop",
      description: "14-inch Full HD display, 256GB SSD",
      price: "$600",
      image:
        "https://media.gettyimages.com/id/1095608518/vector/laptop-isolated-on-white-background.jpg?s=612x612&w=gi&k=20&c=a0KZt1jQ09OFmQD-I1GGaFFYyltiYfeZvmAv5rf2qUo=",
    },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>
        <button className="btn btn-primary">Add Product</button>
      </div>

      <div className="row">
        {products.map((product, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="text-primary fw-semibold">{product.price}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">✏️</button>
                  <button className="btn btn-danger btn-sm">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
