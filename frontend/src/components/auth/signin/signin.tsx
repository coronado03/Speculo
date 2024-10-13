import Button from "../../ui/button";
import InputForm from "../../ui/input";

const SignIn = () => {
  return (
    <div className="bg-white rounded-[20px]">
      <div className="px-20 py-12 flex flex-col gap-6">
        <div className="text-[28px] text-system-black font-semibold">
          Login to your account
        </div>
        <div className="flex flex-col gap-16">
          <InputForm inputName="Email" placeHolder="Email" />
		  <InputForm
            inputName="Password"
            placeHolder="Enter your pasword"
            isPassword={true}
          />
          <Button label="Log in" />
        </div>
        <div className="text-center">
          <span>Don't Have An Account?</span>
          <a href="/" className="text-foreground-primary inline-block pl-2">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
