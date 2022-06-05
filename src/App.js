import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
        <Hero />
        <Products heading='Choose your favorite' data={productData}/>
        <Feature />
        <Products heading="Sweet Treats for you" data={productDataTwo} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
