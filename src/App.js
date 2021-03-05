import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopProvider from './context/shopContext';
import HomePage from './pages/HomePage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import CustomerCare from './components/CustomerCare';
import Footer from './components/Footer';
import ReturnsPage from './pages/ReturnsPage';
import DeliveryPage from './pages/DeliveryPage';
import SizingPage from './pages/SizingPage';



const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Navbar/>
          <Cart/>
          <Switch>
            <Route path="/men/product/:id">
              <ProductPage/>
            </Route>
            <Route path="/men">
              <MensPage/>
            </Route>
            <Route path="/women">
              <WomensPage/>
            </Route>
            <Route path="/sizing">
              <SizingPage/>
            </Route>
            <Route path="/returns">
              <ReturnsPage/>
            </Route>
            <Route path="/delivery">
              <DeliveryPage/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
          <CustomerCare/>
          <Footer/>
        </Router>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
