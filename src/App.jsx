import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Base, Header, Home, Order, Toppings } from './components';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const location = useLocation();

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;

    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }

    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.key} location={location}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}
