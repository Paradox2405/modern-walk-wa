import { Link } from "react-router";

export default function Header() {
  return (
    <header className="shadow-sm border-b-2 border-[#D9D9D9]">
      <div className="container mx-auto my-4 flex justify-center">
        <Link to="/" className=" text-center font-bold text-5xl ">
          Modern Walk
        </Link>
      </div>
    </header>
  );
}
