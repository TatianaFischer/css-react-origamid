import React from 'react';
import styles from '../components/Produto.module.css';

const Produto = () => {
  return (
    <div className={styles.containerLoja}>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 2.000,00</p>
      <button className={styles.comprar}>Comprar</button>

      <p className={styles.desconto}>De 4.000,00!!!</p>
    </div>
  );
};

export default Produto;
