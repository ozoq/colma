import type { Item } from "@prisma/client";
import { db, pick, random, repeat, tagDictionary } from "../utils";

export default async function seedTags() {
  const items = await db.item.findMany();

  for (let { id: itemId } of items) {
    await repeat(random(5), () => createTag(itemId));
  }
}

async function createTag(itemId: Item["id"]) {
  const name = pick(tagDictionary);
  await db.itemTag.upsert({
    where: {
      name,
    },
    update: {
      items: {
        connect: {
          id: itemId,
        },
      },
    },
    create: {
      name,
    },
  });
}
