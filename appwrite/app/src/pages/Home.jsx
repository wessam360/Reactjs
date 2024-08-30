import React, { useState } from 'react'
import storageService from '../appwrite/config'
import { Container, PostCard } from '../components/index'

export default function Home() {
    const [Posts,setPosts] = useState([])
    storageService.getAllPosts([])
    .then(posts=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    .catch((err)=>{
        console.log("error in getAllPosts :: Home page",err);
    })
if(Posts.length === 0 ){
    return(
        <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </div>
            </div>
        </Container>
    </div>
    )
}
else{
    return(
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {Posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
}
