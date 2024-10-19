import SignUp from "../components/auth/signup/signup";

const LandingPage = () => {
  return (
    <main className="sign-background">
      <div className="w-screen flex justify-center h-screen items-center gap-4">
        <SignUp />
      </div>
    </main>
  );
};

export default LandingPage;
