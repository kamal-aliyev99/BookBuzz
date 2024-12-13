"use client";
import './Search.scss';
import {
    FaUser
} from 'react-icons/fa';
import {
    CiSearch 
} from "react-icons/ci";
import { useState } from 'react';
import { redirect } from 'next/navigation';
import Input from '../Input/Input';
import Link from 'next/link';


const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([])

    const apiURL = "https://bookbuzz.inloya.com/api/v1";
    const token = sessionStorage.getItem("JWT_TOKEN");

    function handleSearch() {
        fetch(`${apiURL}/product/search?q=${search}`, {
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
              setResults(data.result.products)
            }
          })
    }
    
    function handleShowData(id) {
        setResults([])
        setSearch("");
        redirect(`/products/${id}`)
    }


  return (
    <div className='search'>
        <Input
            icon={<CiSearch/>}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            iconOnClick={handleSearch}
        />

        {
            results.length ?

            <ul className='search__results'>
                {
                    results.map(result => (
                        <li key={result.id} className='search__results--item' onClick={() => handleShowData(result.id)}>
                            {result.title}
                        </li>
                    ))
                }
            </ul>

            : ""
        }

    </div>
  );
};

export default Search;