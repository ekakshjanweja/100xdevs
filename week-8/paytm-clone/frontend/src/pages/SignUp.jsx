import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBoxComponent from "../components/InputBoxComponent";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-slate-50 hover:shadow-sm w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Create an account to get started."} />
            <InputBoxComponent
              label={"First Name"}
              placeholder={"John"}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <InputBoxComponent
              label={"Last Name"}
              placeholder={"Doe"}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <InputBoxComponent
              label={"Email"}
              placeholder={"johndoe@example.com"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputBoxComponent
              label={"Password"}
              placeholder={"johndoe1234"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              label={"Sign Up"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:5050/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );

                localStorage.setItem("token", response.data.token);

                navigate("/dashboard");
              }}
            />
            <BottomWarning
              label={"Already have an account? "}
              clickableText={"Signin"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
