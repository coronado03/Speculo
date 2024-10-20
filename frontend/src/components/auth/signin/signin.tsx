import Button from "../../ui/button";
import Input from "../../ui/input";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="bg-white rounded-[20px]">
      <div className="px-20 py-12 flex flex-col gap-6">
        <div className="text-[28px] text-system-black font-semibold">
          Login to your account
        </div>
        <div className="flex flex-col gap-16">
          <Input inputName="Email" placeHolder="Email" />
          <Input
            inputName="Password"
            placeHolder="Enter your pasword"
            isPassword
          />
          <Button label="Log in" />
        </div>
        <div className="text-center">
          <span>Don't Have An Account?</span>
          <Link
            href="/signup"
            className="text-foreground-primary inline-block pl-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
