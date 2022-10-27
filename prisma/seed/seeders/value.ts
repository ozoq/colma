import type { Item, ItemFieldDefinition } from "@prisma/client";
import { db, genFieldValue } from "../utils";

export default async function seedFieldValues() {
  const items = await db.item.findMany({
    include: {
      collection: {
        select: {
          fields: {
            select: {
              type: true,
              id: true,
            },
          },
        },
      },
    },
  });

  for (let {
    id: itemId,
    collection: { fields },
  } of items) {
    for (let { id: definitionId, type: fieldType } of fields) {
      await createFieldValue({ itemId, definitionId, fieldType });
    }
  }
}

async function createFieldValue({
  itemId,
  definitionId,
  fieldType,
}: {
  itemId: Item["id"];
  definitionId: ItemFieldDefinition["id"];
  fieldType: ItemFieldDefinition["type"];
}) {
  await db.itemFieldValue.create({
    data: {
      value: genFieldValue(fieldType),
      item: {
        connect: {
          id: itemId,
        },
      },
      definition: {
        connect: {
          id: definitionId,
        },
      },
    },
  });
}
