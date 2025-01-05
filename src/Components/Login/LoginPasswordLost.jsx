import React from 'react';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { PASSWORD_LOST } from '../../apis';
import Error from '../Helper/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        // Essa URL precisa ser a do site
        url: 'http://localhost:5173/login/recuperar',
        // url: window.location.href.replace('recuperar', 'resetar'),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="titlee">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando ... </Button>
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
