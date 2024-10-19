import SignIn from "@/src/components/auth/signin/signin";

const SignInPage = () => {
  return (
    <main className="sign-background">
      <div className="w-screen flex justify-center h-screen items-center gap-4">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
