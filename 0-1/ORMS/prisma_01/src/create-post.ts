import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Get started with Prisma",
      content: "Guide to Prisma",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Query for post is generated");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
