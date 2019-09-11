import React from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";

import Cart from "./Cart";
import ThankYou from "./ThankYou";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E5E5E5;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  const [cartId, setCartId] = React.useState(1);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Cart cartId={cartId} path="/" />
        <ThankYou path="/thankyou" cartId={cartId} setCartId={setCartId} />
      </Router>
    </>
  );
}

export default App;
