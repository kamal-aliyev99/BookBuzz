"use client";

import { useEffect, useState } from 'react';
import './products.scss'; 

import ProductCard from "@/components/ProductCard/ProductCard";


const ProductsPage = () => {
  const [datas, setDatas] = useState([])

  const apiURL = "https://bookbuzz.inloya.com/api/v1";
  const token = sessionStorage.getItem("JWT_TOKEN");

  useEffect(() => {
        fetch(`${apiURL}/product/explore`, {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
        })
        .then(res => {
          if (!res.ok) {
            throw new Error("Error")
          } 
          return res.json();
        })
        .then(data => {
          if (data.isError) {
            console.error(data.errorMessage);
          } else {
            setDatas(data.result.products)
          }
        })
  }, [apiURL])


  return (
    <div className="container">
      <h2>Products</h2>
      <div className="productsContainer">
        {
          datas.map(data => (
            <ProductCard key={data.id} data={data}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default ProductsPage;

