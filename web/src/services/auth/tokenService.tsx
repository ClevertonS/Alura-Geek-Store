import nookies from 'nookies';

const ACESS_TOKEN_KEY = 'ACESS_TOKEN_KEY';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;

export const TokenService = {
  save(acessToken: string, ctx = null) {
    globalThis?.sessionStorage?.setItem(ACESS_TOKEN_KEY, acessToken);
    nookies.set(ctx, ACESS_TOKEN_KEY, acessToken, {
      maxAge: ONE_HOUR,
      path: '/',
    });
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACESS_TOKEN_KEY];
  },
};
