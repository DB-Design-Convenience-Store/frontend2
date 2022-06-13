import gql from 'graphql-tag';

export const ALL_TX = gql`
  query {
    getTransactions {
      ok
      transactions {
        id
        createdAt
        isRefund
        amount
        customer {
          id
        }
        product {
          id
          name
          price
        }
      }
    }
  }
`;

export const NEW_TX = gql`
  mutation createTransaction($newTransaction: CreateTransactionInput!) {
    createTransaction(input: $newTransaction) {
      ok
      error
    }
  }
`;
