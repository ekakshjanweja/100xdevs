import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { SignUpInput, SignInInput } from "@stormej/common-app";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [input, setInput] = useState<SignUpInput | SignInInput>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type}`,
        input
      );

      const jwt = response.data;

      localStorage.setItem("jwt", jwt);

      navigate("/blogs");
    } catch (error) {}
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-2xl">Create An Account</h1>
        <div className="flex gap-x-2">
          <p>Already have an account? </p>
          <p>Login</p>
        </div>
        <div
          className={cn(
            type === "signup" ? "flex flex-col mt-4 gap-2 w-full" : "hidden"
          )}
        >
          <p className="font-semibold">Username</p>
          <Input
            className="rounded"
            placeholder="Enter your username"
            onChange={(e) => {
              setInput({ ...input, name: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col mt-4 gap-2 w-full">
          <p className="font-semibold">Email</p>
          <Input
            className="rounded"
            placeholder="me@example.com"
            onChange={(e) => {
              setInput({ ...input, username: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col mt-4 gap-2 w-full">
          <p className="font-semibold">Password</p>
          <Input
            className="rounded"
            type="password"
            onChange={(e) => {
              setInput({ ...input, password: e.target.value });
            }}
          />
        </div>
        <Button
          className="mt-10 bg-neutral-900 rounded-xl text-neutral-50 w-full hover:bg-neutral-800 uppercase"
          onClick={sendRequest}
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </Button>
      </div>
    </>
  );
};
