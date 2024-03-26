import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  //TODO: Add Zod Validation
  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({ message: "Signed up" });
}

export async function GET() {
  const user = await prisma.user.findFirst({});
  return Response.json({ name: user?.username, email: user?.username });
}
