import { Prisma } from "@prisma/client";
import { basicItemArgs, formatBasicItem } from "./basicItem";

export const fullCollectionArgs = Prisma.validator<Prisma.CollectionArgs>()({
  include: {
    author: {
      select: {
        nickname: true,
        id: true,
      },
    },
    _count: {
      select: {
        items: true,
      },
    },
    items: basicItemArgs,
  },
});

export type FullCollectionPrismaType = Prisma.CollectionGetPayload<
  typeof fullCollectionArgs
>;

export const formatFullCollection = ({
  name,
  description,
  id,
  imageUrl,
  author: { nickname: authorName, id: authorId },
  topic,
  _count: { items: itemsCount },
  items,
}: FullCollectionPrismaType) => ({
  name,
  description,
  id,
  imageUrl,
  authorName,
  authorId,
  topic,
  itemsCount,
  items: items.map(formatBasicItem),
});

export type FullCollectionType = ReturnType<typeof formatFullCollection>;
