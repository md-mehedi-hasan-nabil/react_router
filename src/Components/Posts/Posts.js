import React from 'react';
import { Button, Box  } from '@material-ui/core';
import './Posts.css';

const Posts = (props) => {
    const {title, id} = props.allPost;
    return (
        <Box className="boxStyle">
            <h1>Posts:</h1>
            <h2>{title}</h2>
            <Button variant="contained" color="primary" href={`/detailPost/${id}`}>
                Detail Post
            </Button>
        </Box>
    );
};

export default Posts;