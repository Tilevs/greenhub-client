import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductImg from '../img/ProductImg.png';
import ApagarImg from '../img/ApagarImg.png';
import EditarImg from '../img/EditarImg.png';
import styles from './ProductDetail.module.css';

function ProductDetail() {
    const { id } = useParams();

    const [isExpanded, setIsExpanded] = useState({
        physical: false,
        chemical: false,
    });

    const toggleSection = (section) => {
        setIsExpanded((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Criação da lista de produtos
    const products = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: `Garrafa PET`,
        description: "Reciclável e resistente, fabricada com polietileno tereftalato (PET), um polímero termoplástico amplamente utilizado por sua durabilidade e leveza. Possui alta transparência e resistência a impactos e variações térmicas, sendo ideal para armazenamento de líquidos, como água e refrigerantes. Além disso, sua superfície lisa facilita a limpeza, e o material é seguro para contato com alimentos. Pode ser reciclada diversas vezes, contribuindo para a sustentabilidade e redução de resíduos plásticos no meio ambiente.",
        img: ProductImg,
    }));

    console.log("ID recebido:", id); // Debug

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <p>Produto não encontrado! Verifique o ID na URL.</p>;
    }

    return (
        <div>
            <div className={styles["product-img"]}>
                <img src={ProductImg} alt="Imagem do produto" />
                <img className={styles["edit-icon"]} src={EditarImg} alt="Botão de editar" />
                <img className={styles["delete-icon"]} src={ApagarImg} alt="Botão de apagar" />
            </div>

            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <h4 
              onClick={() => toggleSection("physical")} 
              className={styles["toggle-header"]}
            >
                Propriedades físicas da garrafa PET
                <span className={isExpanded.physical ? styles["arrow-up"] : styles["arrow-down"]}></span>
            </h4>
            {isExpanded.physical && (
                <p>
                    As propriedades físicas incluem alta resistência ao impacto, leveza e durabilidade.
                </p>
            )}

            <h4 
              onClick={() => toggleSection("chemical")} 
              className={styles["toggle-header"]}
            >
                Propriedades químicas da garrafa PET
                <span className={isExpanded.chemical ? styles["arrow-up"] : styles["arrow-down"]}></span>
            </h4>
            {isExpanded.chemical && (
                <p>
                    As propriedades químicas incluem resistência a ácidos e bases fracas e excelente estabilidade térmica.
                </p>
            )}
        </div>
    );
}

export default ProductDetail;
