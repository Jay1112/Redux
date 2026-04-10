import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/features/cart/action";

function ProductCard({ productData, index }) {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) => state?.cart?.bucket?.[productData?.id]?.quantity || 0,
  );

  function handleAddProduct(id) {
    return () => {
      dispatch(addProductToCart(id));
    };
  }

  if (productData === null) {
    return;
  }

  return (
    <div className="relative m-4 rounded shadow-lg">
      <img
        className="w-full max-h-75"
        width={300}
        height={300}
        src={productData.download_url}
        alt="Sunset in the mountains"
        loading={index === 0 ? "eager" : "lazy"}
      />
      <div className="px-6 py-4 flex items-center justify-center w-full">
        <p className="font-bold text-xl text-center flex-1">
          {productData.author}
        </p>
        <button
          onClick={handleAddProduct(productData.id)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Add</span>
        </button>
      </div>
      {quantity > 0 && (
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 z-99 text-white bg-indigo-500 w-10 h-10 flex items-center justify-center rounded-full">
          <p className="text-lg">{quantity}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
