import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { productsFetched } from "./redux/features/products/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetched([2,3,4,5,9]));
  },[])
  return (
    <>
      <h1>Redux</h1>
    </>
  )
}

export default App
