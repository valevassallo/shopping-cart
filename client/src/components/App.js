import React from 'react';
import { Router } from "@reach/router"

import Cart from './Cart'
import ThankYou from './ThankYou'

function App() {
  return (
    <Router>
      <Cart path="/" />
      <ThankYou path="thankyou" />
    </Router>
  );
}

export default App;
