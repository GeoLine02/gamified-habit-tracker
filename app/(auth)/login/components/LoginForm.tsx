"use client";

import Input from "@/components/ui/Input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4 shadow-2xl p-8 px-6 rounded-xl bg-white">
      <div className="text-center space-y-2">
        <h1 className="text-xl font-medium md:text-2xl">Welcome Back 👋</h1>
        <p className="text-medium-gray">
          Please login to continue your journey
        </p>
      </div>
      <Input>
        <Input.Label htmlFor="username">Username</Input.Label>
        <Input.Field name="username" id="username" placeholder="Username" />
      </Input>
      <Input>
        <Input.Label htmlFor="password">Password</Input.Label>
        <Input.Field
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </Input>
      <button className="font-medium text-xl w-full bg-custom-green py-2 rounded-xl text-white cursor-pointer">
        Login
      </button>
      <p className="text-medium-gray">
        Don&apos;t have an account?{" "}
        <Link className="text-custom-green font-medium" href={"/register"}>
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
