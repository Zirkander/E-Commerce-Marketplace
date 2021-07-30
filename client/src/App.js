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
import Cart from "./sharedComponents/Cart";
import ShopBlog from "./pages/ShopBlog";
import { useState } from "react";
import ViewCart from "./pages/ViewCartPage";


function App() {

  const [id, setID] = useState("");

    return (
        <div>
            <ShopProvider>
              <Navbar />
                <div>
                  <Router>
                    <HomePage path="/home" id = {id}/>
                    <ProductPage id = {id} path="/product/:id" />
                    <ViewCart path="/view/cart"/>
                    {/* <ShopBlog path="/blogs"/> */}
                  </Router>
                </div>
              <div>
              </div>
              <Footer />
            </ShopProvider>
        </div>
    );
}

export default App;