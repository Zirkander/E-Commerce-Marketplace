import "./App.css";
import { Link, Redirect, Router } from "@reach/router";
import {BrowserRouter as Switch, Route } from 'react-router-dom';

import ShopProvider from "./context/shopContext";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./sharedComponents/Navbar";
// import Cart from "./sharedComponents/Cart";
import SideBar from "./sharedComponents/Sidebar";

function App() {
    return (
        <div style={{ textAlign: "left", width: "80%", margin: "0 auto", display: "flex"}} >
            <ShopProvider>
              <div>
                <Navbar />
                <Router>
                  <HomePage path="/" />
                  <ProductPage path="/product/:id"/>
                </Router>
              </div>
              <div>
                {/* <Cart /> */}
                <SideBar />
              </div>
            </ShopProvider>
        </div>
    );
}

export default App;