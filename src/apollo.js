import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const TOKEN = 'x-jwt';
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  window.location.reload();
};

//backend port주소 넣어서 해줘야됩니다.
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BACKEND ? process.env.REACT_APP_BACKEND : 'http://localhost:5000/graphql',
});

//토큰은 header의 x-jwt 에 들어갑니다.
const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers, 'x-jwt': localStorage.getItem(TOKEN) } };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
