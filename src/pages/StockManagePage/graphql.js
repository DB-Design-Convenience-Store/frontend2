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
        productId
      }
    }
  }
`;

/*
  HOW TO USE:

  const [createStock, { data, loading, error }] = useMutation(CREATE_STOCK);
  createStock({ variables: { type: input.value } });
*/
export const CREATE_STOCK = gql`
  mutation CreateStock($location: Location!, $amount: Float!, $productId: Float!) {
    createStock(input: { location: $location, amount: $amount, productId: $productId }) {
      ok
      error
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
