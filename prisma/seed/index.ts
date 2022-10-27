import seedUsers from "./seeders/user";
import seedCollections from "./seeders/collection";
import seedFieldDefinitions from "./seeders/definition";
import seedItems from "./seeders/item";
import seedTags from "./seeders/tag";
import seedFieldValues from "./seeders/value";
import { db } from "./utils";

export default async function seed() {
  const seeders: Function[] = [];

  seeders.push(seedUsers);
  seeders.push(seedCollections);
  seeders.push(seedFieldDefinitions);
  seeders.push(seedItems);
  seeders.push(seedTags);
  seeders.push(seedFieldValues);

  for (let seeder of seeders) {
    await seeder();
  }
}

seed()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
