import gql from 'graphql-tag';

export const ALL_LOSSES = gql`
  query {
    getLosses {
      ok
      losses {
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

export const NEW_LOSS = gql`
  mutation createLoss($newLoss: CreateLossInput!) {
    createLoss(input: $newLoss) {
      ok
      error
    }
  }
`;
