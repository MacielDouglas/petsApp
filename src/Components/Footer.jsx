import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
      <p>Desenvolvido por Maciel D. e Origamid</p>
    </div>
  );
};

export default Footer;
