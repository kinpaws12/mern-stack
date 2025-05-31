import React from "react";

export default function HomePage() {
  return (
    <section
      className="text-center py-5 text-white"
      style={{
        background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        minHeight: "100vh",
        maxWidth: "1080px",
        margin: "0 auto",
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-4">Welcome to ProdManage</h1>
        <p className="lead mx-auto mb-4" style={{ maxWidth: "1080px" }}>
          Effortlessly manage your products with our all-in-one tool. Create, view, edit, and delete
          products — fast, simple, and reliable.
        </p>
        <a href="/products" className="btn btn-light btn-lg">
          Explore Products
        </a>
      </div>
    </section>
  );
}
