import ReigsterForm from "./components/ReigsterForm";

const Register = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/auth-background.png')" }}
    >
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Gamified Habit Tracker
        </h1>
        <p className="text-gray-600 mt-2">
          Build habits, earn rewards, level up your life
        </p>
      </div>

      <ReigsterForm />
    </div>
  );
};

export default Register;
