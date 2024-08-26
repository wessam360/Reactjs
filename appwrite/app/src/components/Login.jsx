import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { login as authLogin } from "../store/autoslice";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Input,Button,Logo  } from './index';
import  authService from '../appwrite/auth';

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [register,handleSubmit] = useForm()
    const [error,setError] = useState()
    const login = async (data)=>{
        setError("")
        try {
           const session =  await authService.login(data)
           if(session){
                const userData = await authService
                .getCurrentUser()
                if(userData){
                dispatch(authLogin(userData))
            }
            navigate("/")
           }
        } catch (error) {
          setError(error.message)  
        }
    }
  return (
    <div
    className='flex w-full justify-center items-center'
    >
        <div className={` w-full p-8 mx-auto rounded-xl border border-black/10 max-w-lg `}
        >
            <div className={`mb-2 flex justify-center `}
            >
                <span className='inline-block w-full max-w-[100px]'
                >
                    <Logo width='100%'
                    >
                    </Logo>
                    </span>

            </div>
            <h2 className=' leading-tight text-2xl font-bold  '
            >Sign into your Account
            </h2>
            <p className="mt-2 text-center text-base text-black/60"
            >
                Don&apos;t have any account?&nbsp;
                <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            error && <p className="text-red-600 mt-8 text-center">{error}</p>
            <form onSubmit={handleSubmit(login)}>
                <Input
                placeholder = "Enter Your Email Address"
                type = "email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPattern:(value)=>{
                            return(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) 
                                    || "Email Must Be Valid Address"
                                    )
                        }
                    }
                })}
                >
                </Input>
                <Input
                type="password"
                label="password"
                placeholder = "Enter Your Password"
                {...register("password",{
                    required:true
                })}
                >
                </Input>
                <Button
                type='submit'
                className='w-full'
                >
                </Button>
            </form>
        </div>
    </div>
  )
}

export default Login
