import "./App.css";
import { Link, Redirect, Router } from "@reach/router";
import {BrowserRouter as Switch, Route } from 'react-router-dom';

import ShopProvider from "./context/shopContext";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <div style={{ textAlign: "left", width: "80%", margin: "0 auto"}} >
          <ShopProvider>
            <Router>
                <HomePage path="/" />
                <ProductPage path="/product/:id"/>
            </Router>
          </ShopProvider>
        </div>
    );
}

export default App;