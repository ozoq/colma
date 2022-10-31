import { Prisma } from "@prisma/client";
import { basicCollectionArgs, formatBasicCollection } from "./basicCollection";
import { basicItemArgs, formatBasicItem } from "./basicItem";

export const fullCollectionArgs = Prisma.validator<Prisma.CollectionArgs>()({
  include: {
    ...basicCollectionArgs.include,
    items: basicItemArgs,
  },
});

export type FullCollectionPrismaType = Prisma.CollectionGetPayload<
  typeof fullCollectionArgs
>;

export const formatFullCollection = (collection: FullCollectionPrismaType) => ({
  ...formatBasicCollection(collection),
  description: collection.description,
  items: collection.items.map(formatBasicItem),
});

export type FullCollectionType = ReturnType<typeof formatFullCollection>;
