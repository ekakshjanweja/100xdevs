"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const AppBar = () => {
  const session = useSession();
  return (
    <>
      <div className="flex flex-col p-6 items-start justify-center">
        <button
          onClick={() => {
            signIn();
          }}
        >
          Signin
        </button>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
        <p>{JSON.stringify(session)}</p>
      </div>
    </>
  );
};
