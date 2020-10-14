import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Main = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    }, []);
    return (
        <Container fixed>
            <h1>Total posts: {post.length}</h1>
            {
                post.map(allPost => <Posts key={allPost.id} allPost={allPost}></Posts>)
            }
        </Container>
    );
};

export default Main;