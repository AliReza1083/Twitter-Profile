import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b-2 fixed top-0 left-0 z-50">
      <div className="w-full max-w-[1536px] h-16 flex justify-between items-center mx-auto px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-xl">IMAGE-PROFILE</h1>
        <Link
          href={"/community-showcase"}
          className="text-sm opacity-70 hover:opacity-100"
        >
          Community Showcase
        </Link>
      </div>
    </nav>
  );
}
