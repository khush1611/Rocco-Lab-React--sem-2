import React from "react";
import ReactDOM from "react-dom";

import Header from "components/Header";
// import Greeting from "components/Greeting";
import ProductList from "components/ProductList";
import Footer from "components/Footer";

import 'css/reset.css';
import 'css/default.css';
import 'css/reusable-class.css';
import 'css/header.css';
import 'css/index.css';
import 'css/media-query.css';

const App = () => {
    const arrayProduct = [
        {id:1, name: 'Sofa', price: 200 },
        {id:2, name: 'Sofa', price: 300 },
        {id:3, name: 'Sofa', price: 400 },
        {id:4, name: 'Sofa', price: 500 },
        {id:5, name: 'Sofa', price: 600 }
    ]
	return(
        <>
            <Header />
            {/* <Greeting name="World" /> */}
            <ProductList data={arrayProduct} />
            <Footer />
        </>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));
