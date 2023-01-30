import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const storyPost = () => {
    const{storyId}= useParames();
    const[title,setTitle]= useState();
    const[image,setImage]=useState();
    const[desc,setDesc]= useState();
    // const[comment,setComment]= useState();
    // const[like,setLike]= useState(false);

    useEffect( ()=> {
        fetch('https://scsfliafcignvnbwghkx.supabase.co/rest/v1/stories?{storyId}&select=*',
        {
            method: "GET",
            headers: {
            apikey: process.env.REACT_APP_SUPABASE_ANON_KEY ,
            Authorization: 'Bearer {process.env.REACT_APP_SUPABASE_ANON_KEY}'
            },
        })
        .then( (response) => response.json())
        .then((response)=> {
            if (response.length>0){
                setImage(response[0].image);
                setTitle(response[0].title);
                setDesc(response[0].desc);
                console.log(response);
            }
        });
    }, []);
}
return(
    <>
    </>
)
export default storyPost;