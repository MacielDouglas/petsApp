import React from 'react';
import Input from './../Forms/Input';
import Button from './../Forms/Button';
import useForm from './../../Hooks/UseForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api.js/Api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import styles from './Login.module.css';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
        // url: 'http://localhost:5173/login/perdeu',
      });

      const { json } = await request(url, options);
    }
  }

  return (
    <section className={`${styles.formsy} animeLeft login`}>
      <Head
        title="Perdeu a Senha"
        description="Página de recuperação de senha do site Dogs."
      />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
