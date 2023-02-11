import React, { useEffect, useState } from "react";
import './FeaturedProductsSection.css'
import FeaturedProductsMap from "../FeaturedProductsMap/FeaturedProductsMap";

const FeaturedProductsSection = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    
    fetch('product.json')
     .then(res => res.json())
     .then(data => setProducts(data))
     .catch(e => console.error(e))

  },[])

  return (

    <div className="mt-10 mb-5">

      <h1 className="text-3xl font-bold text-center">Featured Products</h1>

      {/* card */}

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 mx-3 lg:mx-20 gap-2">

       
      {
        products.map(product => <FeaturedProductsMap
         key={product.id} productData ={product}
        ></FeaturedProductsMap>)
      }
        

      </div>

    </div>

  );
};

export default FeaturedProductsSection;
