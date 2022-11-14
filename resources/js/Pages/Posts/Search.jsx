import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// import backgroundImage from "./background.png";


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.post);

        setData(json.post);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

    var post_list = [];
    if(data){
        post_list = data.map( (post, index) => { 
            return <div key={index} > {post.title}</div> 
        });
    }



  return (
     <div>
        {post_list}
     </div>
  );
};

export default App;


