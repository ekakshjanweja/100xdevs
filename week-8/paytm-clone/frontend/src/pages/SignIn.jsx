import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBoxComponent from "../components/InputBoxComponent";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

function SignIn() {
  return (
    <>
      <div className="bg-white h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-slate-50 hover:shadow-sm w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"} />
            <SubHeading label={"Welcome Back! Login to continue."} />
            <InputBoxComponent
              label={"Email"}
              placeholder={"johndoe@example.com"}
            />
            <InputBoxComponent label={"Password"} placeholder={"johndoe1234"} />
            <Button label={"Sign In"} />
            <BottomWarning
              label={"Don't have an account?"}
              clickableText={"Signup"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
