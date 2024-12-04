import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SellerDetail.module.css";
import SellerImg from "../img/Seller.png";

function SellerDetail() {
  const { id } = useParams();

  const seller = {
    id: id,
    name: `Vendedor ${id}`,
    description:
      "Olá! Somos uma equipe apaixonada por qualidade e comprometida em trazer até você o melhor. Trabalhamos com produtos selecionados e nos dedicamos para garantir que cada item seja produzido com cuidado, seguindo rigorosos padrões de segurança e excelência. Ao longo dos anos, buscamos aprimorar cada etapa do processo produtivo, valorizando sempre a transparência e a eficiência, para que você tenha confiança em cada compra realizada conosco. Nossa equipe está preparada para atender suas necessidades com agilidade e atenção, oferecendo uma experiência de compra confiável e sem complicações. Conte com a gente para fornecer o que você precisa com qualidade e compromisso.",
    img: SellerImg,
  };

  return (
    <div className={styles.container}>
      <div className={styles.sellerHeader}>
        <img src={seller.img} alt={seller.name} className={styles.sellerImage} />
        <div>
          <h1>{seller.name}</h1>
          <h5>Seu Parceiro de confiança para as Melhores soluções</h5>
        </div>
      </div>
      <p>{seller.description}</p>
    </div>
  );
}

export default SellerDetail;
