interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  category: string;
}

export default function ProductCard({
  title,
  price,
  imageUrl,
  description,
  category,
}: ProductCardProps) {
  const isMenCategory = category === "men's clothing";
  return (
    <div
      className={` bg-white rounded-3xl shadow-lg drop-shadow-xl overflow-hidden `}
    >
      <h3 className="text-center font-bold text-gray-900 px-8 py-4 truncate">
        {title}
      </h3>

      <div className="h-48 flex items-center justify-center px-20 py-4">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      <div
        className={`p-4 ${
          isMenCategory ? "bg-mens" : "bg-womens"
        } rounded-t-3xl`}
      >
        <div className="flex justify-center items-start mb-2">
          <span className="text-2xl  font-bold text-price-font whitespace-nowrap ml-4">
            Rs {price}
          </span>
        </div>
        {description && (
          <p className="text-black-font font-normal text-center line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
