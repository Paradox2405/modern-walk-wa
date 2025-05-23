interface ProductCardProps {
  title: string;
  price: string;
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
    <div className={`w-80 bg-white rounded-3xl shadow-lg overflow-hidden `}>
      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{title}</h3>

      <div className="h-64 bg-gray-100 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className={`p-6 ${
          isMenCategory ? "bg-mens" : "bg-womens"
        } rounded-t-3xl`}
      >
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-xl font-bold text-blue-600 whitespace-nowrap ml-4">
            {price}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-700 line-clamp-3">{description}</p>
        )}
      </div>
    </div>
  );
}
