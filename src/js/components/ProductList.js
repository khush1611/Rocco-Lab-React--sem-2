import React from "react";
import Product from "components/Product";

const ProductList = ({data}) => {

    const arrayProductMapping = data.map(productElement =><Product key={productElement.id} name={productElement.name} price={productElement.price} /> ) 


	return  (
			<>
                <section class="section-product">
                    <h2>Our Products</h2>
                    <p class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aliquid accusantium debitis recusandae voluptatibus nostrum obcaecati laudantium repudiandae praesentium maxime, voluptates sed eius repellat in natus asperiores consequatur. Nostrum, dolorem.</p>

                    <section class="row section-product__row">
                        {arrayProductMapping}
                    </section>
                </section>

            </>
		)
}

export default ProductList;