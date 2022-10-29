import { fieldCellArgs, formatFieldCell } from "./fieldCell";
import type { ItemTag } from "@prisma/client";
import { Prisma } from "@prisma/client";

export const basicItemArgs = Prisma.validator<Prisma.ItemArgs>()({
  include: {
    tags: true,
    fieldCells: fieldCellArgs,
    _count: {
      select: {
        likedBy: true,
      },
    },
  },
});

export type BasicItemPrismaType = Prisma.ItemGetPayload<typeof basicItemArgs>;

export const formatBasicItem = ({
  name,
  id,
  tags,
  fieldCells,
  _count: { likedBy },
}: BasicItemPrismaType) => ({
  name,
  id,
  tags: tags.map(formatTag),
  fields: fieldCells.map(formatFieldCell),
  likes: likedBy,
});

export type BasicItemType = ReturnType<typeof formatBasicItem>;

const formatTag = (tag: ItemTag) => tag.name;
