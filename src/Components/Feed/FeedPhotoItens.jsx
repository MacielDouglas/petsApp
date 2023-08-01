import React from 'react';
import styles from './FeedPhotosItens.module.css';

const FeedPhotoItens = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItens;
