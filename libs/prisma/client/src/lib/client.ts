import { PrismaClient } from "@prisma/client";

/**
 * * ⚠️ IMPORTANT: This singleton pattern is CRITICAL for Next.js.
 * Ensures a single instance of PrismaClient is used, preventing connection pool exhaustion
 * during development hot-reloads.
 * */

// 1. Extend the global object to hold the client instance in development
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// 2. Instantiate the client or retrieve the global one.
// We only define and export the variable once here.
export const prismaClient =
  global.prisma ||
  new PrismaClient({
    // FIX 1: Access NODE_ENV using bracket notation for safety (error 4111)
    log:
      process.env["NODE_ENV"] === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// 3. In development, save the new client instance to the global object.
// We use bracket notation here as well.
if (process.env["NODE_ENV"] !== "production") {
  global.prisma = prismaClient;
}

// FIX 2: Removed the redundant 'export { prismaClient };' line (errors 2323, 2484).
// The client is already exported via 'export const prismaClient = ...' above.
export const client = prismaClient;
