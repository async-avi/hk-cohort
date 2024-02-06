import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const post = await prisma.user.update({
    data: {
      name: "Abhinav Chad",
    },
    where: {
      id: 1,
    },
  });
  console.log(post);
};

main()
  .then(async () => {
    console.log("Query to update userInfo generated");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
