import Link from "next/link";

export default function Navbar() {
  return (
    <div>
    <nav className="flex justify-between items-center    px-8 py-3" >
      <Link className="text-white font-bold text-2xl" href={"/"}>
        Your Todo List
      </Link>
      <Link className="bg-blue-300 text-white font-bold rounded-lg p-2" href={"/addTopic"}>
        Add Todo
      </Link>
    </nav>

    </div>
  );
}
