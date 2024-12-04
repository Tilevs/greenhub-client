import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import styles from "./ProductList.module.css";
import ProductImg from '../img/ProductImg.png';

function ProductList() {
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: "Garrafa PET",
    description: "Reciclável, leve e resistente.",
    img: ProductImg,
    price: `R$ ${(Math.random() * 100).toFixed(2)}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className={styles.container}>
      <h2>Produtos Disponíveis</h2>
      <div className={styles.productList}>
        {currentProducts.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <Link to={`/product/${product.id}`} className={styles["product-item"]}>
              <img src={product.img} alt={product.name} />
            </Link>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ProductList;
