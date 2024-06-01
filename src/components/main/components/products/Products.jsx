import classes from "./Products.module.css";
import DummyJson from "../../../../api/dummyjson.js";

const Products = () => {
    return (
        <div className={classes.products}>

            <div className={classes.product}>


                <div className={classes.productHeader}>
                    .{classes.product}
                </div>

                <div className={classes.productBody}>

                </div>


                <div className={classes.productImgBlock}>

                </div>
                <div className="rr"></div>
                <div className="rr"></div>
            </div>
        </div>
    );
}

export default Products;

/* import React from 'react';
import classes from './Products.module.css';

const Products = () => {
    return (
        <div className={classes.products}>
            <h1 className={classes.title}>Our Products</h1>
            <div className={classes.productList}>
                <div className={classes.product}>
                    <img src="product1.jpg" alt="Product 1" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 1</h2>
                    <p className={classes.productDescription}>This is a great product that solves many problems.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
                <div className={classes.product}>
                    <img src="product2.jpg" alt="Product 2" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 2</h2>
                    <p className={classes.productDescription}>An innovative solution for modern needs.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
                <div className={classes.product}>
                    <img src="product3.jpg" alt="Product 3" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 3</h2>
                    <p className={classes.productDescription}>A reliable and efficient product for everyday use.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
                <div className={classes.product}>
                    <img src="product3.jpg" alt="Product 3" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 3</h2>
                    <p className={classes.productDescription}>A reliable and efficient product for everyday use.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
                <div className={classes.product}>
                    <img src="product3.jpg" alt="Product 3" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 3</h2>
                    <p className={classes.productDescription}>A reliable and efficient product for everyday use.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
                <div className={classes.product}>
                    <img src="product3.jpg" alt="Product 3" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 3</h2>
                    <p className={classes.productDescription}>A reliable and efficient product for everyday use.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
                <div className={classes.product}>
                    <img src="product3.jpg" alt="Product 3" className={classes.productImage} />
                    <h2 className={classes.productName}>Product 3</h2>
                    <p className={classes.productDescription}>A reliable and efficient product for everyday use.</p>
                    <button className={classes.productButton}>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Products;
 */