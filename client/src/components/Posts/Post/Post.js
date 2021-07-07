import React from 'react'
import moment from "moment"

const Post = ({post}) => {
    return (
        <>
        <article>
            <div>Image: <img src={post.selectedFile} alt="" srcset="" /></div>
            <div>
                <h3>{post.creator}</h3>
                <h4>{moment(post.createdAt).fromNow()}</h4>
            </div>
            

         <p>{post.message}</p>
        </article>

        <div>
                <button onClick={() => {}}>Update The Feed</button>
            </div>

        </>
    )
}

export default Post
