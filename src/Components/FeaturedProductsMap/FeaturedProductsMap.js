import React from 'react';

const FeaturedProductsMap = ({productData}) => {
   
  const {id, productImd, price, productName, details1, details2} = productData;

  return (

    <div className="card">

    <figure>
      <img
        src={productImd}
        alt="Shoes"
      />
    </figure>

    <div className="card-body">

      <h2 className="text-center font-semibold">{productName}</h2>

      <p className="price text-center">${price}</p>

      
      <span className="text-center"> {details1} | {details2} </span>
      

      <div className="card-actions justify-center mt-3">
        <button className="add-To-Card font-semibold">Add To Card</button>
      </div>

    </div>

  </div>

  );
};

export default FeaturedProductsMap;