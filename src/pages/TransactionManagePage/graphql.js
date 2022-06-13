import gql from 'graphql-tag';

export const NEW_TX = gql`
  mutation createTransaction($newTransaction: CreateTransactionInput!) {
    createTransaction(input: $newTransaction) {
      ok
      error
    }
  }
`;
