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
    <Link to={path}>
      <div
        className={`relative ${backgroundColor} w-[1660px] h-[878px] rounded-[120px] shadow-lg`}
      >
        <div className="absolute inset-0 rounded-[60px] bg-current" />
        <div className="absolute inset-1/4 text-center font-bold text-[150px] leading-[176px] text-white">
          {text}
        </div>
      </div>
    </Link>
  );
}
