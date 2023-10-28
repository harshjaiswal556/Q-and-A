import React, { useEffect, useState } from 'react'
import QuestionBox from './QuestionBox'
import "./css/Feed.css"
import Post from './Post'
import axios from 'axios';

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/api/questions').then((res) => {
            console.log(res.data);
            setPosts(res.data.reverse());
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div className="feed">
            <QuestionBox />
            {
                posts.map((post, index) => (<Post post={post} key={index} />))
            }
            {/* <Post /> */}
        </div>
    )
}

export default Feed