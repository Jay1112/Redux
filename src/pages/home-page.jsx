import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPage } from "../redux/features/products/actions";
import Loader from "../components/loader";
import withAppLayout from "../layouts/app-layout";
import ProductCard from "../components/product-card";
import Pagination from "../components/pagination";

function HomePage() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const productList = useSelector((state) => state.product.productList);
  const page = useSelector((state) => state.product.page);

  useEffect(() => {
    if(!productList.length){
      dispatch(fetchProducts(page));
    }
  }, [dispatch]);

  useEffect(() => {
      dispatch(fetchProducts(page));
  }, [page, dispatch]);

  function handlePageChange(value){
    dispatch(setPage(value));
  }

  if (loading) {
    return <Loader />;
  }

  if (error && error?.message) {
    <p className="p-4">{error?.message}</p>;
  }

  return (
    <div className="py-4">
      <h2 className="px-4 text-xl font-semibld">Products List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        {productList.map((item, index) => {
          return <ProductCard key={item.id} productData={item} index={index} />;
        })}
      </div>
      <div className="flex items-center justify-center py-4">
        <Pagination currentPage={page} totalPages={10} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default withAppLayout(HomePage);
