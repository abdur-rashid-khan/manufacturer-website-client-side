import { useEffect, useState } from "react";

const LoadingProducts = () => {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://mighty-everglades-10453.herokuapp.com/products')
    .then(res=>res.json())
    .then(data => setProducts(data))
  },[])
  return[products]
};

export default LoadingProducts;