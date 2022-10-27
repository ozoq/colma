import { faker } from "@faker-js/faker";
import type { Collection } from "@prisma/client";
import { db, random, repeat } from "../utils";

export default async function seedItems() {
  const collections = await db.collection.findMany();

  for (let { id: collectionId } of collections) {
    await repeat(random(5), () => createItem(collectionId));
  }
}

async function createItem(collectionId: Collection["id"]) {
  await db.item.create({
    data: {
      name: faker.lorem.sentence(5),
      collection: {
        connect: {
          id: collectionId,
        },
      },
    },
  });
}
