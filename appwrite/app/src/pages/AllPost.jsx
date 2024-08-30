import React, { useState } from 'react'
import storageService from "../appwrite/config";
import { Container,PostCard } from "../components/index";
export default function AllPost() {
    const [Posts,setPosts] = useState([])
    storageService.getAllPosts([])
    .then(posts=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
return(
    <div className="py-8">
        <Container>
            <div className=' flex flex-wrap'>
                {
                    Posts.map((posts)=>{
                        <div key={posts.$id} className=' w-1/4 p-2'>
                            <PostCard {...posts}/>
                        </div>
                    })
                }
            </div>
        </Container>
    </div>
)
}
