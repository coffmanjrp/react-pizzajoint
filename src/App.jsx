import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Base, Header, Home, Order, Toppings } from './components';

export default function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });

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
      <Switch>
        <Route>
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route>
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
