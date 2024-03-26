"use client";

import { LabelledInput } from "@/components/lablled-input";

export const SignInComponent = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center ">
        <div className="flex flex-col justify-center items-center p-6 border border-neutral-300 bg-blue-50 rounded-lg">
          <p className="font-bold text-3xl">Sign In</p>
          <LabelledInput label="Email" placeholder="johndoe@example.com" />
          <LabelledInput
            label="Password"
            placeholder="johnDoeSecretPassword"
            type="password"
          />
          <button
            className="mt-8 w-full bg-neutral-950 p-2 px-2 text-neutral-50 rounded-md"
            type="button"
            onClick={() => {
              console.log("Sign In");
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};
