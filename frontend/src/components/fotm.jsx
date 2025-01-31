import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import api from '../api'
import "../styles/Form.css"
import LoadingIndicator from './loadingindicator'
function Form({route,method}) {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)
    const name=method==='login'?"login":'Register'
    const navigate=useNavigate()
    async function handleSubmit(e){
        setLoading(true)
        e.preventDefault()

        try{
            const res=await api.post(route,{username,password})
            if (method==='login'){
                localStorage.setItem(ACCESS_TOKEN,res.data.access);
                localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
                navigate("/")
            }else{
                navigate("/login")
            }
        }
        catch(error){
            alert(error)
        }
        finally{
            setLoading(false)
        }
    }
    return ( <form onSubmit={handleSubmit} className='form-container'>
        <h1> {name} </h1>
        <input 
            className='form-input'
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'
        />
        <input 
            className='form-input'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'
        />
        {loading && <LoadingIndicator></LoadingIndicator>}
        <div className="button-a">
        <button className='form-button' type='submit'>
            {name}
        </button> {method==="login" && <a href="/register">or  create account</a>}
        </div>
    </form> );
}

export default Form;