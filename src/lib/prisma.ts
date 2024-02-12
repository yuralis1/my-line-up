import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.cachedPrisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  global.cachedPrisma = prisma;
}
