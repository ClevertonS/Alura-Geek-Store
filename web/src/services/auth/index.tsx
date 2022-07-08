import axios from 'axios';
import Router from 'next/router';

import { TokenService } from './tokenService';

interface IValue {
  username: string;
  password: string;
}

const authService = {
  async login(url: string, value: IValue) {
    axios
      .post(url, value)
      .then((resposta) => {
        TokenService.save(resposta.data.acess_token);
        alert('Login efeutado com');
        Router.push('/');
      })
      .catch((error) => {
        console.log(url);
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
