import Link from "next/link";


interface ProductType {
  _id: string;
  name: string;
  price: number;
  img: string;
  category: string;
}

interface ProductsListProps {
  products: ProductType[];
}


export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-32">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/category/product/${product._id}`}
          className="border p-4 block hover:shadow-lg transition"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full object-cover transition-transform duration-300 rounded"
    
          />
          <h3 className="mt-2 font-shabnam text-center">{product.name}</h3>
          <p className="text-gray-600 font-shabnam text-center">{product.price.toLocaleString('fa-IR')} تومان</p>
        </Link>
      ))}
    </div>
  );
}
