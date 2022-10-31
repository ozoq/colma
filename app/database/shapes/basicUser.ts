import { Prisma } from "@prisma/client";

export const basicUserArgs = Prisma.validator<Prisma.UserArgs>()({});

export type BasicUserPrismaType = Prisma.UserGetPayload<typeof basicUserArgs>;

export const formatBasicUser = ({ username, id }: BasicUserPrismaType) => ({
  username,
  id,
});

export type BasicUserType = ReturnType<typeof formatBasicUser>;
