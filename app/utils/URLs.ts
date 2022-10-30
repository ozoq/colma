export const generateUserUrl = (userId: number) => `/users/${userId}`;

export const generateCollectionUrl = (collectionId: number) =>
  `/collections/${collectionId}`;

export const generateItemUrl = (id: number) => `/items/${id}`;

export const generateTagUrl = (tag: string) => `/search?byTag=${tag}`;
