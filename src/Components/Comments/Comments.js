import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetail from '../CommentsDetail/CommentsDetail';

const Comments = () => {
    const {idNum} = useParams();
    const [idInfo, setIdinfo] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idNum}`)
        .then(res => res.json())
        .then(data => setIdinfo(data))
    },[]);
    return (
        <Box>
            <h1>Detail of Comments : {idNum}</h1>
            {
                idInfo.map(commentsInfo => <CommentsDetail key={commentsInfo.id} commentsInfo={commentsInfo}></CommentsDetail>)
            }
        </Box>
    );
};

export default Comments;