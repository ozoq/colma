import { PrismaClient } from "@prisma/client";

declare global {
  var __db: PrismaClient | undefined;
}

function initPrismaClient() {
  // Don't care about these shenanigans in production
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }
  // Reuse existing connection
  if (global.__db !== undefined) {
    global.__db?.$connect();
    return global.__db;
  }
  // Connect for the first time
  return (global.__db = new PrismaClient());
}

const db = initPrismaClient();

export { db };
