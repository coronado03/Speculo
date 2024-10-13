import SignIn from "../components/auth/signin/signin";

const LandingPage = () => {
  return (
    <main className="bg-slate-400">
      <div className="w-screen flex justify-center h-[500px] items-center gap-4">
        <SignIn />
      </div>
    </main>
  );
};

export default LandingPage;
