/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShirt = /* GraphQL */ `
  mutation CreateShirt(
    $input: CreateShirtInput!
    $condition: ModelShirtConditionInput
  ) {
    createShirt(input: $input, condition: $condition) {
      id
      Type
      Brand
      Size
      Image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateShirt = /* GraphQL */ `
  mutation UpdateShirt(
    $input: UpdateShirtInput!
    $condition: ModelShirtConditionInput
  ) {
    updateShirt(input: $input, condition: $condition) {
      id
      Type
      Brand
      Size
      Image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteShirt = /* GraphQL */ `
  mutation DeleteShirt(
    $input: DeleteShirtInput!
    $condition: ModelShirtConditionInput
  ) {
    deleteShirt(input: $input, condition: $condition) {
      id
      Type
      Brand
      Size
      Image
      createdAt
      updatedAt
      __typename
    }
  }
`;
