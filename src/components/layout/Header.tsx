import { Link } from "react-router";

export default function Header() {
  return (
    <header className="shadow-sm ">
      <div className="container mx-auto my-auto flex justify-center">
        <Link to="/" className=" text-center ">
          Modern Walk
        </Link>
      </div>
    </header>
  );
}
