import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgba(255, 255, 255, 0.98)',
            boxShadow: '0px 0px 8px rgba(255, 255, 255, 0.98)',
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}
