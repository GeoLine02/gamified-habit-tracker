import LoginForm from "./components/LoginForm";

const Login = async () => {
  // const res = await fetch("/");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/auth-background.png')" }}
    >
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Gamified Habit Tracker
        </h1>
        <p className="text-gray-600 mt-2">
          Build habits, earn rewards, level up your life
        </p>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
