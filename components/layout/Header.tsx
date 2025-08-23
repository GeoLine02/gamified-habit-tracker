import Link from "next/link";
import Profile from "../shared/Profile";

export default function Header() {
  return (
    <header className="px-4 py-2 container flex justify-between items-center">
      <Profile />
      <div className="items-center gap-4 hidden md:flex">
        <button className="bg-white py-2 px-4 rounded-xl font-medium">
          <Link href={"/"}>Dashboard</Link>
        </button>
        <button className="bg-white py-2 px-4 rounded-xl font-medium">
          <Link href={"/profile"}>Profile</Link>
        </button>
      </div>
    </header>
  );
}
