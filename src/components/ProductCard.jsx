import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      className="block bg-white rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 shadow-md hover:shadow-lg hover:border-gray-500 hover:bg-gray-50 cursor-pointer"
      href={`/products/${product.id}`}
    >
      {product.image && <img src={product.image} className="w-full h-48 object-cover rounded-t-lg" alt="" />}
      <div className="p-4">
        <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:no-underline uppercase">
          {product.name}
        </h1>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl text-slate-600">{product.price}</h2>
        </div>
        <p className="mb-2 font-normal text-gray-700 two-lines-ellipsis">
          {product.description}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
