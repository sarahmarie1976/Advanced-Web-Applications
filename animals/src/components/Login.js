import React, { useState } from "react";
import axios from 'axios';

export default function Login(props) {
    // How can we log in? What do we need to do?

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', login)
            .then(res =>{ 
                console.log(res)
                window.localStorage.setItem('token', res.data.payload)
            });

    }

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <form onSubmit={handleSubmit} >
            <input 
                type='text'
                name='username'
                value={login.username}
                onChange={handleChange}
                className='input'
                ></input>

            <input 
                type='text'
                name='password'
                value={login.password}
                onChange={handleChange}
                className='input'
                ></input>
            <button >Login</button> 
            </form>  
        </div>
    )
}