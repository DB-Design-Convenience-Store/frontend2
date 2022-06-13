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
  mutation editStock($editStock: EditStockInput!) {
    editStock(input: $editStock) {
      ok
      error
    }
  }
`;
