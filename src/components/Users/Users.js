import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';
import './Users.css';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const {title, body, id} = props.user;
    return (
        <Container className="user-container">
            <Grid item xs={12}>
                <h3>Title: {title}</h3>
                <p>{body}</p>
                <Link to={`/post/${id}`}><Button variant="outlined">Learn More</Button></Link>
            </Grid>
        </Container>
    );
};

export default Users;