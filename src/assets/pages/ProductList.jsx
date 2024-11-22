import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import styles from './ProductList.module.css';

function ProductList() {
    const products = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: "Garrafa PET",
        description: "Reciclável, leve e resistente. Ideal para armazenar líquidos.",
        img: "https://s3-alpha-sig.figma.com/img/50b2/de31/2b5274db9b68c72138fbbdc61bf58f7d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D9Eku2OTY69EsNVLETZR9GWh8-dM~P2yYwAEWYJM5t-1XO07YvkQKCzQpoK-dWrC5gmEcTKKZg271eD92feqGizwhk3LuUYDUQT1tM2gR48NToT8gFFVw~oFjzU7-q0oVxQyRf8gvC211qage1gbPK4geTBNRhKp6yGarENhh2nDivTYON6W8YXojgqu2VvlypI3BmYEY4iZMGEMvoECV2iBhY34pE5hq7Jyt8WaRVmm2OIns~lLLbRkTvBwCbDOFWIA13Pw0GS81WfTCRVMtikzjS3QFjMGBl5jQ9Ff~u~V1DrgPmOXjDCVu06CSRTPTwl-j-kmiDMeJWsz6nYnPA__",
        price: `R$ ${(Math.random() * 100).toFixed(2)}`
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className={styles.container}>
            {/* Listagem de Produtos */}
            {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}

            {/* Paginação */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default ProductList;
