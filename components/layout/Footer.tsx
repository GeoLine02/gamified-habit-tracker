import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:hidden px-4 ">
      <div className="flex items-center justify-around bg-white py-4 rounded-xl font-medium">
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/profile"}>Profile</Link>
      </div>
    </footer>
  );
};

export default Footer;
