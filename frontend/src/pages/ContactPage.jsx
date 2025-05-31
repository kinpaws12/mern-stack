import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <footer className="bg-light text-center py-5">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h3 className="h5 fw-semibold mb-3">Contact Us</h3>
        <p className="mb-1">
          <strong>Address:</strong> 123 React Street, UI City, CA 90210
        </p>
        <p className="mb-1">
          <strong>Email:</strong> hello@prodmanage.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
      </div>
    </footer>
  );
}
