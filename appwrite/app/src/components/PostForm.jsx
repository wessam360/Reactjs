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
    const submit = async(data)=>{
        if(post){
            const file = await storageService.uploadFile(data.image[0])
            if(file){
            await storageService.deleteFile(post.featuredImage)
            }
            const dbPost = await storageService.updatePost(
                post.$id,
                {
                    ...data,
                    featuredImage : file? file.$id : undefined
                })
            if(dbPost){
                navigate(`post/${post.$id}`)
            }
        }
        else{
            const file = await storageService.uploadFile(data.image[0])
            if(file){
                const fileId = post.$id
                data.featuredImage = fileId
                // after completing come here and see why not deleted
                // await storageService.deleteFile(data.featuredImage)

                const dbPost = await storageService.createPost({
                    ...data,
                    userId:userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

  return (
    <>
    </>
  )
}
