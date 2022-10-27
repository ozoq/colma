import type { Collection } from "@prisma/client";
import { db } from "~/lib/db.server";

export type LargestCollection = Awaited<
  ReturnType<typeof getLargestCollections>
>[0];

export async function getLargestCollections(amount: number = 5) {
  return (
    await db.collection.findMany({
      take: amount,
      orderBy: {
        items: {
          _count: "desc",
        },
      },
      include: {
        author: {
          select: {
            nickname: true,
            id: true,
          },
        },
        _count: {
          select: {
            items: true,
          },
        },
      },
    })
  ).map((collection) => ({
    id: collection.id,
    name: collection.name,
    imageUrl: collection.imageUrl,
    author: collection.author,
    topic: collection.topic,
    itemsCount: collection._count.items,
  }));
}

export type CollectionWithItems = Awaited<ReturnType<typeof getCollection>>;

export async function getCollection({ id }: Pick<Collection, "id">) {
  const collection = await db.collection.findUnique({
    where: {
      id,
    },
    include: {
      author: {
        select: {
          nickname: true,
          id: true,
        },
      },
      _count: {
        select: {
          items: true,
        },
      },
      items: {
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
      },
    },
  });

  if (!collection) {
    return null;
  }

  // TODO: later on, refactor this somehow, it dublicates with models/item.server.ts
  return {
    name: collection.name,
    description: collection.description,
    imageUrl: collection.imageUrl,
    author: collection.author,
    topic: collection.topic,
    itemsCount: collection._count.items,
    items: collection.items.map((item) => ({
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
    })),
  };
}
