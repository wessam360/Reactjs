import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button,Input,RTE,Select } from "./index";
import storageService from "../appwrite/config";
import { useSelector } from 'react-redux';

export default function PostForm({post}) {
    const [hadelSubmit,register,watch,setValue] = useForm({
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active"
    })
    const navigate = useNavigate()
    const userData = useSelector(state=>state.auth.userData)
    

  return (
    <>
    </>
  )
}
