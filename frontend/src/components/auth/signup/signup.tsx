import Button from "../../ui/button";
import Input from "../../ui/input";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="bg-white rounded-[20px]">
      <div className="px-20 py-12 flex flex-col gap-6">
        <div className="text-[28px] text-system-black font-semibold">
          Create an account
        </div>
        <div className="flex flex-col gap-16">
          <Input inputName="Email" placeHolder="Email" />
          <Input
            inputName="Password"
            placeHolder="Enter your pasword"
            isPassword
          />
          <Input placeHolder="Repeat your pasword" isPassword />
        </div>
        <Button label="Create account" />
        <div className="text-center">
          <span>Already Have An Account?</span>
          <Link
            href="/signin"
            className="text-foreground-primary inline-block pl-2"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
