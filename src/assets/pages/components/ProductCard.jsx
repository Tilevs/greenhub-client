import React from "react";
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <img src={product.img} alt={product.name} />
            <div className={styles.info}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className={styles.price}>{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
