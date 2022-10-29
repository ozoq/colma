import { Prisma } from "@prisma/client";

export const fieldCellArgs = Prisma.validator<Prisma.FieldCellArgs>()({
  include: {
    head: true,
  },
});

export type FieldCellPrismaType = Prisma.FieldCellGetPayload<
  typeof fieldCellArgs
>;

export const formatFieldCell = ({
  id: cellId,
  value,
  head: { id: headId, name, type },
}: FieldCellPrismaType) => ({
  headId,
  cellId,
  value,
  name,
  type,
});

export type FieldCellType = ReturnType<typeof formatFieldCell>;
