import type { FieldHead, Item } from "@prisma/client";
import { db, genFieldValue } from "../utils";

export default async function seedFieldCells() {
  const items = await db.item.findMany({
    include: {
      collection: {
        select: {
          fieldHeads: true,
        },
      },
    },
  });

  for (let {
    id: itemId,
    collection: { fieldHeads },
  } of items) {
    for (let { id: headId, type } of fieldHeads) {
      await createFieldCell({ itemId, headId, type });
    }
  }
}

async function createFieldCell({
  itemId,
  headId,
  type,
}: {
  itemId: Item["id"];
  headId: FieldHead["id"];
  type: FieldHead["type"];
}) {
  await db.fieldCell.create({
    data: {
      value: genFieldValue(type),
      item: {
        connect: {
          id: itemId,
        },
      },
      head: {
        connect: {
          id: headId,
        },
      },
    },
  });
}
