"use client";

import { useEffect, useState } from 'react';
import './detail.scss'; 
import dynamic from 'next/dynamic';
const Detail = dynamic(() => import('@/components/Detail/Detail'), { ssr: false });



const ProductsDetailPage = async ({params}) => {
  const {id} = await params;

  return (
    <div className="container">
      <h2>Product</h2>
      
      <Detail id={id}/>
    </div>
  );
};

export default ProductsDetailPage;

