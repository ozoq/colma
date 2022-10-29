import { db } from "~/lib/db.server";
import { basicItemArgs, formatBasicItem } from "../shapes/basicItem";
import { fullItemArgs, formatFullItem } from "../shapes/fullItem";
import type { Item } from "@prisma/client";

export async function getRecentItems(amount: number = 5) {
  return (
    await db.item.findMany({
      ...basicItemArgs,
      take: amount,
      orderBy: {
        updatedAt: "desc",
      },
    })
  ).map(formatBasicItem);
}

export async function getItemById(id: Item["id"]) {
  const item = await db.item.findUnique({
    ...fullItemArgs,
    where: {
      id,
    },
  });

  if (!item) {
    return null;
  }

  return formatFullItem(item);
}
