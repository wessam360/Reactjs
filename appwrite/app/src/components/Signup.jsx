import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { login } from '../store/autoslice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { set, useForm } from 'react-hook-form'
import {Logo,Button,Input} from './index'

export default function Signup() {
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [register,handleSubmit] = useForm()
    const authsignup = async(userData)=>{
        try {
            setError("")
            const session = await authService.createAccount(userData)
            if(session){
                const userData = await authService.getCurrentUser()
                dispatch(login(userData))
                navigate("/")
            }

        } catch (error) {
            setError(error.message)
        }
    }

  return(
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(authsignup)} >
                <Input
                placeholder = "Enter Your Name"
                {...register,{
                    required:true
                }}
                />
                <Input
                placeholder = "Enter Your Email Address"
                type="email"
                {...register,("email",{
                    required:true,
                    matchPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })}
                />
                <Button
                type='submit'
                className='w-full'
                >
                    Create Account
                </Button>
            </form>
        </div>
    </div>
  )
}
