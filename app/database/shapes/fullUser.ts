import { formatBasicUser } from "./basicUser";
import { Prisma } from "@prisma/client";
import { basicCollectionArgs, formatBasicCollection } from "./basicCollection";

export const fullUserArgs = Prisma.validator<Prisma.UserArgs>()({
  include: {
    collections: basicCollectionArgs,
  },
});

export type FullUserPrismaType = Prisma.UserGetPayload<typeof fullUserArgs>;

export const formatFullUser = (user: FullUserPrismaType) => ({
  ...formatBasicUser(user),
  collections: user.collections.map(formatBasicCollection),
});

export type FullUserType = ReturnType<typeof formatFullUser>;
