import React, { useEffect, useState } from 'react'
import storageService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';
export default function EditPost() {
    const navigate = useNavigate()
    const [Post,setPost] = useState([])
    const {slug} = useParams()
    useEffect(()=>{
    if(slug){
        storageService.getPost(slug)
        .then((posts)=>{
        if(posts){
            setPost(posts)
        }

    })}
    else{
        navigate("/")
    }
},[slug,navigate])
    return Post?
    <div>
        <PostForm/>
    </div>
    :null


}
