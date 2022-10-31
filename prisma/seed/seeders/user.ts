import { faker } from "@faker-js/faker";
import { hashPassword } from "../../../app/lib/auth/utils";
import { db, repeat } from "../utils";

export default async function seedUsers() {
  await repeat(5, createUser);
}

async function createUser() {
  await db.user.create({
    data: {
      username: faker.internet.userName(),
      passwordHash: await hashPassword("123"),
    },
  });
}
