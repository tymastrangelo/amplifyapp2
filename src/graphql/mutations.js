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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
