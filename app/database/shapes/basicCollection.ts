import { Prisma } from "@prisma/client";
import { basicUserArgs, formatBasicUser } from "./basicUser";

export const basicCollectionArgs = Prisma.validator<Prisma.CollectionArgs>()({
  include: {
    author: basicUserArgs,
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
  author,
  topic,
  _count: { items: itemsCount },
}: BasicCollectionPrismaType) => ({
  id,
  name,
  imageUrl,
  author: formatBasicUser(author),
  topic,
  itemsCount,
});

export type BasicCollectionType = ReturnType<typeof formatBasicCollection>;
