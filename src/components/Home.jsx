import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
}
