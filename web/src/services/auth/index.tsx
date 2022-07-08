import axios from 'axios';
import Router from 'next/router';

import { TokenService } from './tokenService';

interface IValue {
  username: string;
  password: string;
}

const authService = {
  async login(value: IValue) {
    axios
      .post(`${process.env.DATABASE_URL}/login`, {
        username: value.username,
        password: value.password,
      })
      .then((resposta) => {
        TokenService.save(resposta.data.acess_token);
        alert('Login efeutado com sucesso');
        Router.push('/');
      })
      .catch((error) => {
        console.log(error);
        alert('Senha ou Email incorreto');
      });
  },
  async isAuthorized(url: string, token: string) {
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default authService;
