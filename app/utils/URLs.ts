export const generateUserUrl = (userId: number) => `/users/${userId}`;

export const generateCollectionUrl = (collectionId: number) =>
  `/collections/${collectionId}`;

export const generateItemUrl = (id: number) => `/items/${id}`;

// TODO: what if a tag has '/' or '?' (etc.) in it?
export const generateTagUrl = (tag: string) => `/search?byTag=${tag}`;

export const generateSearchUrl = (query: string) => {
  const searchParams = new URLSearchParams();
  searchParams.set("query", query);
  return `/search?` + searchParams.toString();
};
