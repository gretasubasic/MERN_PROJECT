import * as api from "../api";

// action creators are functions that return actions 

export const getPosts = () => async (dispatch) =>  {

    try {
        const { data } = await api.fetchPosts();

        dispatch({type: "FETCH_ALL", playload: data});
       
        
    } catch (error) {
        console.log(error.message)
        
    }


    
}

export const createPost = (post) => async (dispatch) => {

    try {
        const { data } = await api.createPost(post);

        dispatch({type: "CREATE", payload: data})

    } catch (error) {
        console.log(error)
        
    }
}