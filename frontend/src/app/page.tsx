import SignUp from "../components/auth/signup/signup";

const LandingPage = () => {
  return (
    <main className="bg-slate-400">
      <div className="w-screen flex justify-center h-[800px] items-center gap-4">
        <SignUp />
      </div>
    </main>
  );
};

export default LandingPage;
