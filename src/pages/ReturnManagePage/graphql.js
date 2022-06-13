import gql from 'graphql-tag';

export const ALL_RETURNS = gql`
  query {
    getReturns {
      ok
      returns {
        id
        createdAt
        updatedAt
        product {
          id
          name
        }
        amount
        reason
      }
    }
  }
`;

export const NEW_RETURN = gql`
  mutation createReturn($newReturn: CreateReturnInput!) {
    createReturn(input: $newReturn) {
      ok
      error
    }
  }
`;
