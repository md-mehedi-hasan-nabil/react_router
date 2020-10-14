import { Box, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPost = () => {
    const {idNum} = useParams();
    const [idInfo, setIdinfo] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idNum}`)
        .then(res => res.json())
        .then(data => setIdinfo(data))
    },[]);
    const {body, title, id} = idInfo;
    return (
        <Box>
            <h1>Details Post: </h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <Button variant="contained" color="primary" href={`/comment/${id}`}>
                see more
            </Button>
        </Box>
    );
};

export default DetailPost;