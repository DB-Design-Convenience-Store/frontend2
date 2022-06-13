import gql from 'graphql-tag';

export const ALL_WAREHOUSINGS = gql`
  query {
    getWarehousings {
      ok
      warehousings {
        id
        createdAt
        updatedAt
        product {
          id
          name
        }
        amount
      }
    }
  }
`;

export const NEW_WAREHOUSING = gql`
  mutation createWarehousing($newWarehousing: CreateWarehousingInput!) {
    createWarehousing(input: $newWarehousing) {
      ok
      error
    }
  }
`;
