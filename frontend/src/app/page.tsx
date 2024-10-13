import SignIn from "../components/auth/signin/signin";


const LandingPage = () => {
  return (
    <>
      <main className="bg-slate-400">
        {/* Left section */}
        <div className="w-screen flex justify-center h-[500px] items-center gap-4">
          <SignIn/>
        </div>

        {/* Right section */}
        <div className="">This is right</div>
      </main>
    </>
  );
};

export default LandingPage;
