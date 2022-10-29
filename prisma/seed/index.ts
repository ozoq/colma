import seedCollections from "./seeders/collection";
import seedFieldCells from "./seeders/fieldCell";
import seedFieldHeads from "./seeders/fieldHead";
import seedItems from "./seeders/item";
import seedTags from "./seeders/tag";
import seedUsers from "./seeders/user";
import { db } from "./utils";

const seedersInOrder = [
  seedUsers,
  seedCollections,
  seedFieldHeads,
  seedItems,
  seedTags,
  seedFieldCells,
];

export default async function seed() {
  for (let seeder of seedersInOrder) {
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
