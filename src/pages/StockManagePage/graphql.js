import gql from 'graphql-tag';

export const ALL_STOCKS = gql`
  query {
    getStocks {
      ok
      stocks {
        id
        createdAt
        updatedAt
        location
        amount
        product {
          id
          name
        }
      }
    }
  }
`;

export const NEW_STOCK = gql`
  mutation createStock($newStock: CreateStockInput!) {
    createStock(input: $newStock) {
      ok
      error
    }
  }
`;
