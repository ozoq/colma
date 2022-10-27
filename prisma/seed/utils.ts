import { faker } from "@faker-js/faker";
import type { ItemFieldType } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export async function repeat(times: number, fn: Function) {
  for (let i = 0; i < times; i++) {
    await fn();
  }
}

export function random(max: number) {
  return Math.floor(Math.random() * max);
}

export function pick<T>(array: T[]) {
  return array[random(array.length)];
}

export const tagDictionary = [
  "love",
  "fashion",
  "photooftheday",
  "art",
  "photography",
  "beautiful",
  "instagram",
  "nature",
  "picoftheday",
  "happy",
  "follow",
  "travel",
  "style",
  "instadaily",
  "like4like",
];

export function genFieldValue(type: ItemFieldType) {
  switch (type) {
    case "STRING":
      return faker.lorem.sentence(5);
    case "MULTILINE":
      return faker.lorem.paragraph(5);
    case "INTEGER":
      return faker.datatype.number(1000).toString();
    case "DATE":
      return faker.datatype.datetime().toString();
    case "BOOLEAN":
      return pick(["true", "false"]);
    case "ENUM":
      return "ENUM NOT IMPLEMENTED";
  }
}

export function genRandomImageUrl() {
  return `https://picsum.photos/id/${random(1000)}/600/600`;
}
