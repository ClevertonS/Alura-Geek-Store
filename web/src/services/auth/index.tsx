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
        Router.push('/');
      })
      .catch(() => alert('Senha ou Email incorreto'));
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
