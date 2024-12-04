import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import styles from "./SellerPage.module.css";
import SellerImg from "../img/Seller.png";

function SellerPage() {
  const sellers = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Vendedor ${index + 1}`,
    description:
      "Ao longo dos anos, buscamos aprimorar cada etapa do processo produtivo, valorizando sempre a transparência e a eficiência, para que você tenha confiança...",
    img: SellerImg,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const sellersPerPage = 5;

  const startIndex = (currentPage - 1) * sellersPerPage;
  const endIndex = startIndex + sellersPerPage;
  const currentSellers = sellers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sellers.length / sellersPerPage);

  return (
    <div className={styles.container}>
      <h2>Vendedores</h2>
      <div className={styles.sellerList}>
        {currentSellers.map((seller) => (
          <div className={styles.sellerCard} key={seller.id}>
            <Link to={`/seller/${seller.id}`} className={styles["seller-item"]}>
              <img src={seller.img} alt={seller.name} />
            </Link>
            <div>
              <h3>{seller.name}</h3>
              <p>{seller.description}</p>
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

export default SellerPage;

