import { faker } from "@faker-js/faker";
import type { User } from "@prisma/client";
import { CollectionTopic } from "@prisma/client";
import { db, genRandomImageUrl, pick, random, repeat } from "../utils";

export default async function seedCollections() {
  const users = await db.user.findMany();

  for (let { id: userId } of users) {
    await repeat(random(5), () => createCollection(userId));
  }
}

async function createCollection(authorId: User["id"]) {
  await db.collection.create({
    data: {
      name: faker.lorem.sentence(5),
      description: faker.lorem.text(),
      imageUrl: genRandomImageUrl(),
      topic: pick(Object.values(CollectionTopic)),
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  });
}
