import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const UserDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    const [comments, setComments] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data=> setComments(data))
    }, []);

    return (
        <Container>
            <h3>This is user posts details: {postId}</h3>
            <h4>Post Title: {post.title}</h4>
            <p>Post Content: {post.body}</p>
            <h3>Users comments: </h3>
            {
                comments.map(comment => <Comments
                     key={comment.id}
                    comment={comment}
                    ></Comments>)
            }
        </Container>
    );
};

export default UserDetails;