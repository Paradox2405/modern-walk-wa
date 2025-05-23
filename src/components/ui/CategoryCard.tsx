import { Link } from "react-router";

type CategoryCardProps = {
  text: string;
  path: string;
  backgroundColor: string;
};

export default function CategoryCard({
  text,
  path,
  backgroundColor,
}: CategoryCardProps) {
  return (
    <Link
      to={path}
      className={`block w-full ${backgroundColor} rounded-2xl shadow-lg drop-shadow-xl hover:shadow-lg transition-shadow `}
    >
      <div className="flex items-center justify-center py-32 px-12">
        <span className="font-bold text-white text-xl md:text-3xl lg:text-4xl text-center">
          {text}
        </span>
      </div>
    </Link>
  );
}
