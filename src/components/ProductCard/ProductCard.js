"use client";
import './ProductCard.scss';
import {
    FaUser,
    FaHeart
} from 'react-icons/fa';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import test from '../../../public/images/bookbuzz logo.jpeg'


const ProductCard = ({data}) => {

    
  return (
    <Link href={`/products/${data.id}`} className='card'> 
        <div className='card__img'>
            <img
                src={data.mainImage}
                alt={data.title}
            />
        </div>
        <h4 className='card__title'> {data?.title} </h4>
        <p className='card__desc'> {data.subtitleShort} </p>
        <span className='card__price'>{data.price} $</span>
        <span className='card__like'> <FaHeart/>{data.numOfLikes} </span>
    </Link>
  );
};

export default ProductCard;