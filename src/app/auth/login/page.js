"use client"

import Input from '@/components/Input/Input';
import './login.scss'
import Button from '@/components/Button/Button'
import {
    FaEnvelope,
    FaEye,
} from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const apiURL = "https://bookbuzz.inloya.com/api/v1";
    const router = useRouter();
    const [previewPass, setPreviewPass] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    function handleData(e) {
        setData(prew => ({
            ...prew,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = JSON.stringify(data);
        
        fetch(`${apiURL}/account/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData,
        }).then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            console.log(data);
            
            if (data.isError) {
                throw new Error(data.errorMessage);
            } else {
                sessionStorage.setItem("JWT_TOKEN", data.result.jwt);
                router.push("/products")
            }

        }).catch(error => {
            console.error(error);
            alert(error)
        })
    }


  return (
    <div className='login'>
      <h1>
        Log In
      </h1>
      <form>
        <label>
            Email
            <Input
                icon={<FaEnvelope/>}
                placeholder="Email"
                type="email"
                name="email"
                value={data.email}
                onChange={handleData}
            />
            
        </label>
        <label>
            Password
            <Input
                icon={<FaEye/>}
                placeholder="Email"
                type={previewPass ? "text" : "password"}
                iconOnClick={() => setPreviewPass(prew => !prew)}
                name="password"
                value={data.password}
                onChange={handleData}
            />
        </label>
        <Button onClick={handleSubmit}> Log In </Button>
      </form>
    </div>
  );
}

export default LoginPage