interface ProductsList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

interface ProductProps {
  products: ProductsList[] | null;
}

const ProductsList = ({ products }: ProductProps) => {
  return products ? (
    <div className=" w-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className=" w-[20rem] bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
        >
          <img
            src={product.image}
            alt={product.title}
            className=" w-[20rem] h-[40vh] object-contain"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            <p className="text-gray-600 text-sm mb-4 flex gap-2 line-clamp-2">
              <strong>Category: </strong> {product.category}
            </p>

            <div className="text-lg font-bold text-indigo-600">
              ${product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>Loading.....</p>
  );
};
export default ProductsList;
