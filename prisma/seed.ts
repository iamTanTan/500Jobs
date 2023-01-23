import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
    },
  });
  console.log({ alice, bob });

  const company1 = await prisma.company.create({
    data: {
      image: "https://picsum.photos/200/300",
      name: "Example Company",
      jobsLink: "https://picsum",
      hqLocation: "Milky Way",
    },
  });

  const company2 = await prisma.company.create({
    data: {
      image: "https://picsum.photos/200/300",
      name: "Example Company 2",
      jobsLink: "https://picsum",
      hqLocation: "Venus",
    },
  });

  console.log({ company1, company2 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
