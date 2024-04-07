"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const session = useSession();

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <button
        onClick={async () => {
          await signIn("google");
        }}
      >
        Login with google
      </button>
      <br />
      <button
        onClick={async () => {
          const res = await signIn("credentials", {
            username: "",
            password: "",
            redirect: false,
          });
          console.log(res);
          router.push("/");
        }}
      >
        Login with email
      </button>
    </div>
  );
}
