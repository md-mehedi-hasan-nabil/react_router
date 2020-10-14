import { Box } from '@material-ui/core';
import React from 'react';

const CommentsDetail = (props) => {
    const {name, email, body} = props.commentsInfo;
    return (
        <Box boxShadow={3} border={1} p={5} m={5}>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <h4>{body}</h4>
        </Box>
    );
};

export default CommentsDetail;