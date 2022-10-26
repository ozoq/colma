import { faker } from "@faker-js/faker";

function many<T>(times: number, get: (index: number) => T) {
  const results = [];
  for (let i = 0; i < times; i++) {
    results.push(get(i));
  }
  return results;
}

function rand(max: number) {
  return faker.datatype.number(max);
}

export type ItemType = {
  id: number;
  likesAmount: number;
  commentsAmount: number;
  name: string;
  tags: string[];
  fields: { [key: string]: any };
  collection: CollectionType;
};

export type CollectionType = {
  id: number;
  imageSrc: string;
  category: string;
  items: ItemType[];
  name: string;
  author: AuthorType;
  description: string;
};

export type AuthorType = {
  name: string;
  id: number;
  collections: CollectionType[];
};

function createAuthor(index: number): AuthorType {
  const author: AuthorType = {
    id: index,
    name: faker.name.fullName(),
    collections: [],
  };
  author.collections = many(rand(10), (i) => createCollection(i, author));
  return author;
}

const createCollection = function (
  index: number,
  author: AuthorType
): CollectionType {
  const collection: CollectionType = {
    id: index,
    name: faker.lorem.sentence(5),
    category: faker.lorem.sentence(1),
    imageSrc: `https://picsum.photos/id/${rand(1000)}/600/600`,
    author: author,
    description: faker.lorem.text(),
    items: [],
  };
  collection.items = many(rand(10), (i) => createItem(i, collection));
  return collection;
};

function createItem(index: number, collection: CollectionType): ItemType {
  const item: ItemType = {
    id: index,
    name: faker.lorem.sentence(),
    likesAmount: rand(1000),
    commentsAmount: rand(1000),
    tags: many(rand(8), () => faker.lorem.sentence(2)),
    fields: Object.fromEntries(
      many(rand(5), () => [faker.lorem.word(), faker.lorem.sentence(5)])
    ),
    collection: collection,
  };
  return item;
}

export default many(rand(10), (i) => createAuthor(i));
