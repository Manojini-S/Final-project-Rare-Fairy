import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Admin.css';
import customer01 from '../Assets/customer01.jpeg';
import customer02 from '../Assets/customer02.jpeg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './userdetails.css';

function Admin() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/Aridesigner/getAri')
            .then(response => setUsers(response.data))
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('An error occurred while fetching users. Please try again later.');
            });
    }, []);

    return (
        <div>
            {error ? (
                <div className="error">Error: {error}</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th> 
                            <th>Ari Id</th>
                            <th>Image Id</th>
                            <th>Price</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.AriId}</td>
                                <td>{user.ImageId}</td>
                                <td>{user.Tittle}</td>
                                <td>{user.Price}</td>
                                <td>
                                    <button className='edit' type='button'>Edit</button>
                                    <button className='delete' type='button'>Delete</button>
                                    <button className='delete' type='button'>Add</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Admin;
