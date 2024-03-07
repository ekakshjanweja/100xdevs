import { Auth } from "@/components/Auth";
import { Quote } from "@/components/Quote";

export const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6">
        <Auth type="signup" />
        <div className="invisible md:visible">
          <Quote />
        </div>
      </div>
    </>
  );
};
