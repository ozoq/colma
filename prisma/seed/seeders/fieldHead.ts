import { faker } from "@faker-js/faker";
import type { Collection } from "@prisma/client";
import { ItemFieldType } from "@prisma/client";
import { db, pick, random, repeat } from "../utils";

export default async function seedFieldHeads() {
  const collections = await db.collection.findMany();

  for (let { id: collectionId } of collections) {
    await repeat(random(5), () => createFieldHead(collectionId));
  }
}

async function createFieldHead(collectionId: Collection["id"]) {
  await db.fieldHead.create({
    data: {
      name: faker.lorem.word(),
      type: pick(Object.values(ItemFieldType)),
      collection: {
        connect: {
          id: collectionId,
        },
      },
    },
  });
}
