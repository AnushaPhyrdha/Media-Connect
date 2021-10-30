import { useEffect, useState } from "react";
import { getToken } from "../../Utils/AuthOperations";
import Header from "../Header/Header";
import Post from "../Post/Post";
import "./Posts.css";

function Posts(){
    const [posts, setPosts] = useState([]);
    async function getData(){
        try {
            const Response  = await fetch("http://localhost:5000/posts", {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${getToken()}`
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

            });
            const { data } = await Response.json();
            console.log(data.posts);
            setPosts(data.posts);
            
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className = "Container">
            <Header />
            <div className="posts">
                {posts.map(post => 
                <Post key = {post._id} {...post} />
                ).reverse()}
            </div>

        </div>
    )
}


export default Posts;