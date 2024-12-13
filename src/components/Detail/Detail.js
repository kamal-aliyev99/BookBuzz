"use client";

import { useEffect, useState } from 'react';
import './Detail.scss'; 
import Button from '../Button/Button';
import { redirect } from 'next/navigation';



const Detail = ({id}) => {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);

  function handleCount(param) {
    if (param == "-" && count>1) {
        setCount(prew => prew-1)
    } else if (param == "+") {
        setCount(prew => prew+1)
    }
  }

  const apiURL = "https://bookbuzz.inloya.com/api/v1";
  const token = sessionStorage.getItem("JWT_TOKEN");

  useEffect(() => {
        fetch(`${apiURL}/product/details?productID=${id}`, {
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
            setData(data.result)
          }
        })
  }, [apiURL])


  function checkout() {
    const jsonData = JSON.stringify({
        products: [{id,count}]
    }) 

    fetch(`${apiURL}/shop/checkout`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: jsonData
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
          alert("Checkout was successful")
          redirect("/products")
        }
      })
  }


  return (
    <div className='detail'>
        <div className='detail__img'>
            <img
                src={data?.mainImage}
                alt={data?.title}
            />
        </div>
        <div className='detail__content'>
            <h2 className='title'> {data?.title} </h2>
            <p>
                {data?.subtitleShort}
            </p>
            <p> {data?.price} $ </p>

            <div className='counter'>
                <button onClick={() => handleCount("-")}> - </button>
                <span> {count} </span>
                <button onClick={() => handleCount("+")}> + </button>
            </div>
            {
                data?.price &&
                <span> {data?.price * count} $ </span>
            }
            <Button
                onClick={checkout}
                className="detail__content--checkout"
            >
                Checkout
            </Button>

            
        </div>
    </div>
  );
};

export default Detail;

