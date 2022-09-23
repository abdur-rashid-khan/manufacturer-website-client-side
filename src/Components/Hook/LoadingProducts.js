import { useEffect, useState } from "react";
import Loading from "../Shear/Loading/Loading";

const LoadingProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://manufacturerserverside.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  // if (products.length === 0) {
  //   return <Loading />
  // }
  return [products]
};

export default LoadingProducts;