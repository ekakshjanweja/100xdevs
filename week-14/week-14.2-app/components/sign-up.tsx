"use client";

import { signup } from "@/actions/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignUpComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-center p-4 gap-6 rounded-lg bg-neutral-800">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="bg-neutral-900 p-4 rounded-md"
          />

          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-neutral-900 p-4 rounded-md"
          />
          <button
            onClick={async () => {
              const response = await signup(username, password);
              localStorage.setItem("token", response);
              router.push("/");
            }}
            type="button"
            className="bg-neutral-900 p-4 rounded-md w-full"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};
