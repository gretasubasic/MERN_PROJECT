import React, { useState } from 'react'
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {

    const [postData, setPostData] = useState({
        creator: "", title: "", message: ""
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));

    }

    const clear = () => {

    }

    return (
        <>
        <h1>This is the form component</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="creator">Creator: </label>
            <input type="text" value={postData.creator} label="creator" placeholder="creator" onChange={(event) => setPostData({...postData, creator: event.target.value}) } />
            <br />
            <br />
            <label htmlFor="title">Title: </label>
            <input type="text" value={postData.title} label="title" placeholder="title" onChange={(event) => setPostData({...postData, title: event.target.value}) } />
            <br />
            <br />
            <label htmlFor="message">Message: </label>
            <input type="text" value={postData.message} label="message" placeholder="message" onChange={(event) => setPostData({...postData, message: event.target.value}) } />
        
        <div>
            <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
            
            />


        </div>

        <button onSubmit={handleSubmit}>Submit the post</button>

        <button onClick={clear}>Clear</button>
        
        
        
        
        </form>

        </>
    )
}

export default Form;
