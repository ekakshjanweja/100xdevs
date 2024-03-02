import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signInInput, signUpInput } from "@stormej/common-app";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signUpInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "Invalid Input" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );

    return c.json({ jwt: jwt });
  } catch (error) {
    return c.json({ error: error });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signInInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "Invalid Input" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    return c.json({ error: "Invalid Credentials" });
  }

  const jwt = await sign(
    {
      id: user.id,
    },
    c.env.JWT_SECRET
  );

  return c.json({ jwt: jwt });
});
