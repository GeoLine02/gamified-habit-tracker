"use client";

import ExpBar from "./ExpBar";
import FemaleProfileIcon from "@/public/profile-female.png";
import MaleProfileIcon from "@/public/profile-male.png";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [userGender] = useState<string>("female");

  return (
    <div className="flex items-center gap-2 ">
      <Image
        className="max-w-20"
        src={userGender === "female" ? FemaleProfileIcon : MaleProfileIcon}
        alt="user-icon"
        aria-labelledby="user profile"
      />
      <ExpBar />
    </div>
  );
}
