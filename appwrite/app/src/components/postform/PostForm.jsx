import React, { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button,Input,RTE,Select } from "../index";
import storageService from "../../appwrite/config";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function PostForm({post}) {
    const [handleSubmit,register,watch,setValue] = useForm({
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
    const slugTransform = (value)=>{
        if(value && typeof value === "string" ){
            return(value
            .toLowerCase()
            .tirm()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-"))
        }
        return("")
    }    
    useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name === "title"){
                setValue("slug",slugTransform(value.title),{
                    shouldValidate:true
                })
            }
        })
        return ()=>subscription.unsubscribe()
    },[watch,setValue,slugTransform])

  return (
<form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

