import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader } from './';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgba(255, 255, 255, 0.98)',
    boxShadow: '0px 0px 8px rgba(255, 255, 255, 0.98)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
}
