import React from 'react';
import './Comments.css';
const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div className="comment-container">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Comments: {body}</p>
        </div>
    );
};

export default Comments;