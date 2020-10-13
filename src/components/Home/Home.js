import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);
    const loadData = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    useEffect(loadData, []);
    return (
        <div>
            {
                users.map(user => <Users
                     user={user}
                     key={user.id}
                     ></Users>)
            }
        </div>
    );
};

export default Home;