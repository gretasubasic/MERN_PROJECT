import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post/Post";
import { getPosts } from "./actions/posts";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getPosts())
    
  },[dispatch])

  return (
    <div className="App">
      <Form />
      <Posts />
      

      
    </div>
  );
}

export default App;
