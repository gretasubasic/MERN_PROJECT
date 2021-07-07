import React from 'react'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const Posts = () => {
const posts = useSelector((state) => state.posts);

console.log(posts);

    return (
        <>
        {!posts.length ? <div>...Loading</div> : (
            <div>{posts.map((post) => (
                <div key={post._id}>
                    <Post post={post} />
                </div>
            )
            )}</div>
        ) }
        </>
        
    )
}

export default Posts
