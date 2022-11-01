import { Prisma } from "@prisma/client";

export const fieldHeadArgs = Prisma.validator<Prisma.FieldHeadArgs>()({
  include: {
    collection: {
      select: {
        id: true,
      },
    },
  },
});

export type FieldHeadPrismaType = Prisma.FieldHeadGetPayload<
  typeof fieldHeadArgs
>;

export const formatFieldHead = ({
  id,
  name,
  type,
  collection: { id: collectionId },
}: FieldHeadPrismaType) => ({
  id,
  name,
  type,
  collectionId,
});

export type FieldHeadType = ReturnType<typeof formatFieldHead>;
