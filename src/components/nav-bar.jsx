import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const bucket = useSelector((state) => state?.cart?.bucket);

  const totalItemsInCart = useMemo(() => {
    return Object.keys(bucket).reduce((acc, curr) => {
      return acc + (bucket[curr].quantity ?? 0);
    }, 0);
  }, [bucket]);

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <nav className="sticky bg-white shadow top-0 z-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-xl font-bold text-indigo-600"
            onClick={handleLogoClick}
          >
            Producto
          </div>
          <div className="space-x-6">
            <Link to={"/cart"}>
              Cart{" "}
              <span className="bg-rose-600 px-3 py-2 text-white rounded-full">
                {totalItemsInCart}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
