import { db } from "~/lib/db.server";
import type { Collection } from "@prisma/client";
import {
  basicCollectionArgs,
  formatBasicCollection,
} from "../shapes/basicCollection";
import {
  fullCollectionArgs,
  formatFullCollection,
} from "../shapes/fullCollection";

export async function getLargestCollections(amount: number = 5) {
  return (
    await db.collection.findMany({
      ...basicCollectionArgs,
      take: amount,
      orderBy: {
        items: {
          _count: "desc",
        },
      },
    })
  ).map(formatBasicCollection);
}

export async function getCollectionById(id: Collection["id"]) {
  const collection = await db.collection.findUnique({
    ...fullCollectionArgs,
    where: {
      id,
    },
  });

  if (!collection) {
    return null;
  }

  return formatFullCollection(collection);
}
