import SignIn from "@/src/components/auth/signin/signin";

const SignInPage = () => {
  return (
    <main className="bg-slate-400">
      <div className="w-screen flex justify-center h-[800px] items-center gap-4">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
