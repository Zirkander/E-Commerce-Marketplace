import "./App.css";
import { Link, Redirect, Router } from "@reach/router";
import {BrowserRouter as Switch, Route } from 'react-router-dom';

import ShopProvider from "./context/shopContext";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./sharedComponents/Navbar";
// import Cart from "./sharedComponents/Cart";
import SideBar from "./sharedComponents/Sidebar";
import ShopBody from "./sharedComponents/ShopBody";
import Footer from "./sharedComponents/Footer";
import { useState } from "react";


function App() {

  const [id, setID] = useState("");

    return (
        <div>
            <Navbar />
            <ShopProvider>
                <div>
                  <Router>
                    <HomePage path="/" id = {id}/>
                    <ProductPage id = {id} path="/product/:id" />
                  </Router>
                </div>
              <div>
                {/* <Cart /> */}
              </div>
              <Footer />
            </ShopProvider>
        </div>
    );
}

export default App;