import { faker } from "@faker-js/faker";
import { db, repeat } from "../utils";

export default async function seedUsers() {
  await repeat(5, createUser);
}

async function createUser() {
  await db.user.create({
    data: {
      nickname: faker.name.fullName(),
    },
  });
}
