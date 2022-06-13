import gql from 'graphql-tag';

export const ALL_ORDERS = gql`
  query {
    getOrders {
      ok
      orders {
        id
        createdAt
        updatedAt
        price
        product {
          id
          name
        }
        amount
      }
    }
  }
`;

export const NEW_ORDER = gql`
  mutation createOrder($newOrder: CreateOrderInput!) {
    createOrder(input: $newOrder) {
      ok
      error
    }
  }
`;
