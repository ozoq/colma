import type { Item } from "@prisma/client";
import { db } from "~/lib/db.server";

export type RecentItem = Awaited<ReturnType<typeof getRecentItems>>[0];

export async function getRecentItems(amount: number = 5) {
  return (
    await db.item.findMany({
      take: amount,
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        tags: {
          select: {
            name: true,
          },
        },
        fields: {
          select: {
            value: true,
            definition: {
              select: {
                name: true,
                type: true,
              },
            },
          },
        },
        _count: {
          select: {
            likedBy: true,
          },
        },
      },
    })
  ).map((item) => ({
    name: item.name,
    id: item.id,
    tags: item.tags.map((tag) => tag.name),
    fields: Object.fromEntries(
      item.fields.map((field) => [
        field.definition.name,
        { value: field.value, type: field.definition.type },
      ])
    ),
    likes: item._count.likedBy,
  }));
}
