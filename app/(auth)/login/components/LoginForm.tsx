"use client";

import { login } from "@/actions/auth/auth";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useActionState } from "react";
import { ClipLoader } from "react-spinners";

const LoginForm = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form
      action={action}
      className="flex flex-col gap-4 shadow-2xl p-8 px-6 rounded-xl bg-white"
    >
      <div className="text-center space-y-2">
        <h1 className="text-xl font-medium md:text-2xl">Welcome Back 👋</h1>
        <p className="text-medium-gray">
          Please login to continue your journey
        </p>
      </div>
      <Input>
        <Input.Label htmlFor="username">Username</Input.Label>
        <Input.Field
          hasValidation={true}
          errorMessage={state?.errors?.username}
          name="username"
          id="username"
          placeholder="Username"
        />
      </Input>
      <Input>
        <Input.Label htmlFor="password">Password</Input.Label>
        <Input.Field
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          hasValidation={true}
          errorMessage={state?.errors?.password}
        />
      </Input>
      <button className="font-medium text-xl w-full bg-custom-green py-2 rounded-xl text-white cursor-pointer items-center justify-center flex gap-4">
        {pending && <ClipLoader color="white" />}
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
