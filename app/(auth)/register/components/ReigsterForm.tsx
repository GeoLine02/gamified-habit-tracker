"use client";

import { register } from "@/actions/auth/auth";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useActionState } from "react";

const RegisterForm = () => {
  const [state, action, panding] = useActionState(register, undefined);

  return (
    <form
      action={action}
      className="bg-white rounded-xl shadow-2xl py-8 px-6 flex flex-col items-center gap-4"
    >
      <div className="text-center space-y-2">
        <h1 className="text-xl font-medium md:text-2xl">
          Welcome new fellow 👋
        </h1>
        <p className="text-medium-gray">
          Create an account and start your journey
        </p>
      </div>

      <Input className="w-full">
        <Input.Label htmlFor="username">Username</Input.Label>
        <Input.Field
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </Input>
      <Input className="w-full">
        <Input.Label htmlFor="password">Password</Input.Label>
        <Input.Field
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </Input>
      <Input className="w-full">
        <Input.Label htmlFor="repeatPassword">Repeat Password</Input.Label>
        <Input.Field
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="Repeat your password"
        />
      </Input>
      <div className="flex items-center gap-4">
        <Input className="flex items-center gap-2">
          <Input.Radio value="male" id="male" name="gender" />
          <Input.Label htmlFor="male">Male</Input.Label>
        </Input>
        <Input className="flex items-center gap-2">
          <Input.Radio value="female" id="female" name="gender" />
          <Input.Label htmlFor="female">Female</Input.Label>
        </Input>
      </div>

      <button className="font-medium py-2 w-full rounded-xl bg-custom-green text-white cursor-pointer">
        Register
      </button>
      <p className="text-medium-gray">
        Already have an account?{" "}
        <Link className="text-custom-green font-medium" href={"/login"}>
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
