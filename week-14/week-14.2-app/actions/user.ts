"use server";

import client from "@/db";

export async function signup(username: string, password: string) {
  // TODO: Add Zod Validation
  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  console.log(user.id);

  return "Signed up!";
}
