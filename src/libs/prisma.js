import { PrismaClient } from '@prisma/client';

// Declaring a variable globally in JavaScript doesn't need 'declare global'
var prisma = new PrismaClient();

export { prisma };

if (process.env.NODE !== 'production') {
  global.prisma = prisma;
}
