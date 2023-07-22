import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    if ('/conta/estatisticas' === location.pathname) setTitle('Estatísticas');
    if ('/conta/postar' === location.pathname) setTitle('Poste Sua Foto');
    if ('/conta' === location.pathname) setTitle('Minha Conta');
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
