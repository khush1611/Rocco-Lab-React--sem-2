import React from "react";
import ProductImage from "img/house_interior/sofa/sofa_1.jpg";

const Product = ({name,price}) => {
  

    const sayHello = (event) => {
        alert(`${name} has been added to your cart`)
    }
    return (
        <>
                <article class="product">        
                <img src={ProductImage} alt="computer image" class="product__image" />
                <h3 class="product__title">{name}</h3>
                <p>{price}</p>
                <button class="button btn-add-cart" onClick={sayHello}>Add to cart</button>
            </article> 
        </>
    )
}
//throwing error
export default Product;











