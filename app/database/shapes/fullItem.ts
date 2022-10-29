import { Prisma } from "@prisma/client";
import { basicCollectionArgs, formatBasicCollection } from "./basicCollection";
import { basicItemArgs, formatBasicItem } from "./basicItem";

export const fullItemArgs = Prisma.validator<Prisma.ItemArgs>()({
  include: {
    ...basicItemArgs.include,
    collection: basicCollectionArgs,
  },
});

export type FullItemPrismaType = Prisma.ItemGetPayload<typeof fullItemArgs>;

export const formatFullItem = (item: FullItemPrismaType) => {
  return {
    ...formatBasicItem(item),
    collection: formatBasicCollection(item.collection),
  };
};

export type FullItemType = ReturnType<typeof formatFullItem>;
