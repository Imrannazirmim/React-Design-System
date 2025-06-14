interface ProductInfoProps {
  product: {
    name: string;
    description: string;
    price: string;
    rating: number;
    imageUrl: string;
  };
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, description, price, rating, imageUrl } = product;

  const ratingArray = [];
  for (let i = 0; i < 5; i++) {
    ratingArray.push(
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >&#9733;</span>
    );
  }
  return (
    <div className=" w-[40rem] mx-auto flex gap-10 shadow m-5">
      <div>
        <img
          src={imageUrl}
          alt={name}
          className="w-[25rem] h-[20vh] object-cover m-2 rounded"
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <span className="text-xl font-semibold text-gray-700">{name}</span>
        <p className="text-wrap text-gray-900">{description}</p>
        <span className="font-semibold">{price}</span>
        <p>
          {ratingArray} {rating}
        </p>
      </div>
    </div>
  );
};
export default ProductInfo;
