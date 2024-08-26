 import React, { useState } from 'react'
import storageService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({
    $id,
    title,
    featuredImage
}) {
    const [getfeaturedImg_url,SetfeaturedImg_url] = useState("")
    storageService.getFilePreview(featuredImage)
    .then((img)=>SetfeaturedImg_url(img))
    .catch((e)=>console.log(e))
    return (
        <Link to={`/post/${$id}`}>  //link to refers to where segment of url end
            <div>
                <div className=' w-full wb-4 justify-center '>
                    <img src={getfeaturedImg_url} alt={title}
                    className=' rounded-xl '  />
                </div>
                <h2 className=' text-xl font-black'>
                    {title}
                </h2>
            </div>
        </Link>
  )
}

export default PostCard
