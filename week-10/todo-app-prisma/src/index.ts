import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  countryCode: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
    },
  });

  console.log(res);
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    data: {
      firstName,
      lastName,
    },
    where: {
      email,
    },
  });

  console.log(res);
}

async function getUser(email: string) {
  const res = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log(res);
}

// insertUser("admin3", "123456", "test", "test");

// updateUser("admin1", { firstName: "stormej", lastName: "janweja" });

// getUser("admin1");
// getUser("admin2");
// getUser("admin3");

insertUser("admin5", "123456", "test1", "test1", "1234567890", "US");

// getUser("admin4");
