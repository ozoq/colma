import { CollectionTopic, ItemFieldType } from "@prisma/client";
import type { Params } from "@remix-run/react";
import invariant from "invariant";
import { db } from "~/lib/db.server";
import { authenticator } from "./../lib/auth/auth.server";

export async function validateThatOwner(request: Request, ownerId: number) {
  const currentUserId = await authenticator.isAuthenticated(request);
  invariant(ownerId === currentUserId, "You cannot edit that resource");
}

export function validateId(rawId: any) {
  const id = Number(rawId);
  invariant(!Number.isNaN(id), "Resource id should be a valid number");
  return id;
}

export function validateCollectionName(name: any) {
  invariant(typeof name === "string", "Name must be a string");
  invariant(name.length > 0, "Name cannot be empty");
  return name;
}

export function validateCollectionDescription(description: any) {
  invariant(typeof description === "string", "Description must be a string");
  invariant(description.length > 0, "Description cannot be empty");
  return description;
}

export function validateCollectionTopic(topic: any) {
  invariant(typeof topic === "string", "Topic must be a string");
  invariant(
    Object.values(CollectionTopic).includes(topic as CollectionTopic),
    "No such topic exists"
  );
  return topic as CollectionTopic;
}

export async function validateCanEditCollection({
  request,
  collectionId,
}: {
  request: Request;
  collectionId: number;
}) {
  const collection = await db.collection.findUnique({
    where: { id: collectionId },
  });
  invariant(collection !== null, "No such collection");
  await validateThatOwner(request, collection.authorId);
}

export function validateFieldName(name: any) {
  invariant(typeof name === "string", "Field name must be a string");
  invariant(name.length > 0, "Field name cannot be empty");
  return name;
}

export function validateFieldType(type: any) {
  invariant(typeof type === "string", "Field type must be a string");
  invariant(
    Object.values(ItemFieldType).includes(type as ItemFieldType),
    "No such type exists"
  );
  return type as ItemFieldType;
}
