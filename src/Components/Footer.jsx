import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>
        Dogs © Alguns direitos reservados. - (site fictício desenvolvido por
        Maciel D.)
      </p>
      <p>
        Acesse outros projetos: <a href="https://olibike.web.app/">#OliBike</a>{' '}
        | <a href="https://cafe-bourbon.web.app/">Café Bourbon</a>
      </p>
    </div>
  );
};

export default Footer;
