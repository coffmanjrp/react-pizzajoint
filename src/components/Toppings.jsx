import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Toppings({ addTopping, pizza }) {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';

          return (
            <motion.li
              key={topping}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: '#f8e112',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgba(255, 255, 255, 0.98)',
            boxShadow: '0px 0px 8px rgba(255, 255, 255, 0.98)',
          }}
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
}
