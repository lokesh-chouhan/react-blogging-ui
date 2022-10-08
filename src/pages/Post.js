import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchPost } from '../libs/Api';
export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {

        fetchPost(id).then(setPost)

        return () => {

        }
    }, [id])


    return (<div>
        <h1>Post {id}</h1>

        <code>
            <pre>{JSON.stringify(post, null, 9)}</pre>
        </code>
    </div>)
}
