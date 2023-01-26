import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/posts");
      setPosts(data);
    };
    fetchData();
  }, []);
  return <div>HELLO:{posts && JSON.stringify(posts)}</div>;
   
  
}

export default App;

