import { Prisma } from "@prisma/client";

export const basicCollectionArgs = Prisma.validator<Prisma.CollectionArgs>()({
  include: {
    author: {
      select: {
        username: true,
        id: true,
      },
    },
    _count: {
      select: {
        items: true,
      },
    },
  },
});

export type BasicCollectionPrismaType = Prisma.CollectionGetPayload<
  typeof basicCollectionArgs
>;

export const formatBasicCollection = ({
  name,
  id,
  imageUrl,
  author: { username: authorName, id: authorId },
  topic,
  _count: { items: itemsCount },
}: BasicCollectionPrismaType) => ({
  id,
  name,
  imageUrl,
  authorName,
  authorId,
  topic,
  itemsCount,
});

export type BasicCollectionType = ReturnType<typeof formatBasicCollection>;
