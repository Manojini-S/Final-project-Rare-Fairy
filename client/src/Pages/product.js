// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import './Admin.css';
// import customer01 from '../Assets/customer01.jpeg';
// import customer02 from '../Assets/customer02.jpeg';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import './productadmin.css';

// function Admin() {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:3003/Aridesigner/getAri')
//             .then(response => setUsers(response.data))
//             .catch(error => {
//                 console.error('Error fetching users:', error);
//                 setError('An error occurred while fetching users. Please try again later.');
//             });
//     }, []);

//     return (
//         <div>
//             {error ? (
//                 <div className="error">Error: {error}</div>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th> 
//                             <th>Ari Id</th>
//                             <th>Image Id</th>
//                             <th>Price</th>
                           
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._id}>
//                                 <td>{user.AriId}</td>
//                                 <td>{user.ImageId}</td>
//                                 <td>{user.Tittle}</td>
//                                 <td>{user.Price}</td>
//                                 <td>
//                                     <button className='edit' type='button'>Edit</button>
//                                     <button className='delete' type='button'>Delete</button>
//                                     <button className='delete' type='button'>Add</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Admin;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productadmin.css';

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

    const handleEdit = (userId) => {
        
        console.log('Edit user with ID:', userId);
    };

    const handleDelete = (userId) => {
        // Logic for deleting a user
        console.log('Delete user with ID:', userId);
        axios.delete(`http://localhost:3003/Aridesigner/${userId}`)
            .then(() => {
                setUsers(users.filter(user => user._id !== userId));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                setError('An error occurred while deleting user. Please try again later.');
            });
    };

    const handleAdd = () => {
        // Logic for adding a new user
        console.log('Add new user');
    };

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
                            <th>Title</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.AriId}</td>
                                <td>{user.ImageId}</td>
                                <td>{user.Tittle}</td>
                                <td>{user.Price}</td>
                                <td className="button-container">
                                    <button className="edit" type="button" onClick={() => handleEdit(user._id)}>Edit</button>
                                    <button className="delete" type="button" onClick={() => handleDelete(user._id)}>Delete</button>
                                    <button className="add" type="button" onClick={handleAdd}>Add</button>
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
