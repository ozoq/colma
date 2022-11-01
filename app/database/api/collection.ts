import { formatFieldHead } from "./../shapes/fieldHead";
import { db } from "~/lib/db.server";
import type { Collection, FieldHead } from "@prisma/client";
import {
  basicCollectionArgs,
  formatBasicCollection,
} from "../shapes/basicCollection";
import {
  fullCollectionArgs,
  formatFullCollection,
} from "../shapes/fullCollection";
import { fieldHeadArgs } from "../shapes/fieldHead";

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

export async function getCollectionFieldHeads(id: Collection["id"]) {
  const collection = await db.collection.findUnique({
    include: {
      fieldHeads: fieldHeadArgs,
    },
    where: {
      id,
    },
  });

  if (!collection) {
    return null;
  }

  return collection.fieldHeads.map(formatFieldHead);
}

export async function getFieldHead(id: FieldHead["id"]) {
  const head = await db.fieldHead.findUnique({
    ...fieldHeadArgs,
    where: {
      id,
    },
  });

  if (!head) {
    return null;
  }

  return formatFieldHead(head);
}
