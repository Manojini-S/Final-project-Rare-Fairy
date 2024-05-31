// import './userdetails.css';
// import React, { useState, useEffect } from 'react';

// const UserTable = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState('');
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [editedName, setEditedName] = useState('');
//     const [editedEmail, setEditedEmail] = useState('');
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = () => {
//         fetch('http://localhost:3003/user/getUser')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch users');
//                 }
//                 return response.json();
//             })
//             .then(data => setUsers(data))
//             .catch(error => {
//                 console.error('Error fetching users:', error);
//                 setError('An error occurred while fetching users. Please try again later.');
//             });
//     };

//     const handleDeleteClick = (userId) => {
//         fetch(`http://localhost:3003/user/deleteUser/${userId}`, {
//             method: 'DELETE'
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to delete user');
//                 }
//                 fetchUsers();
//             })
//             .catch(error => {
//                 console.error('Error deleting user:', error);
//                 setError('An error occurred while deleting the user. Please try again later.');
//             });
//     };

//     const handleVerifyClick = (userId) => {
//         fetch(`http://localhost:3003/user/verifyUser/${userId}`, {
//             method: 'PUT'
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to verify user');
//                 }
//                 fetchUsers();
//             })
//             .catch(error => {
//                 console.error('Error verifying user:', error);
//                 setError('An error occurred while verifying the user. Please try again later.');
//             });
//     };

//     const handleEditClick = (user) => {
//         setSelectedUser(user);
//         setEditedName(user.Name);
//         setEditedEmail(user.Email);
//         setIsEditModalOpen(true);
//     };

//     const handleEditSave = (e) => {
//         e.preventDefault();
//         fetch(`http://localhost:3003/user/updateUser/${selectedUser._UserId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ Name: editedName, Email: editedEmail })
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to update user');
//                 }
//                 setIsEditModalOpen(false);
//                 fetchUsers();
//             })
//             .catch(error => {
//                 console.error('Error updating user:', error);
//                 setError('An error occurred while updating the user. Please try again later.');
//             });
//     };

//     return (
//         <div className="container-box">
//             {isEditModalOpen && selectedUser && (
//                 <div className="edit-modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={() => setIsEditModalOpen(false)}>&times;</span>
//                         <h2>Edit User</h2>
//                         <form onSubmit={handleEditSave}>
//                             <label>Name:</label>
//                             <input
//                                 type="text"
//                                 value={editedName}
//                                 onChange={(e) => setEditedName(e.target.value)}
//                             />
//                             <label>Email:</label>
//                             <input
//                                 type="email"
//                                 value={editedEmail}
//                                 onChange={(e) => setEditedEmail(e.target.value)}
//                             />
//                             <button type="submit">Save</button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//             {error && <div className="error">Error: {error}</div>}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Delete</th>
//                         <th>Verify</th>
//                         <th>Edit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._UserId}>
//                             <td>{user.Name}</td>
//                             <td>{user.Email}</td>
//                             <td>
//                                 <button className="delete" onClick={() => handleDeleteClick(user._UserId)}>Delete</button>
//                             </td>
//                             <td>
//                                 {!user.Verified && (
//                                     <button className="verify" onClick={() => handleVerifyClick(user._UserId)}>Verify</button>
//                                 )}
//                             </td>
//                             <td>
//                                 <button className="edit" onClick={() => handleEditClick(user)}>Edit</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserTable;



















import './userdetails.css';
import './Admin.css';
import React, { useState, useEffect } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('http://localhost:3003/user/getUser')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('An error occurred while fetching users. Please try again later.');
            });
    };

    const handleDeleteClick = (userId) => {
        fetch(`http://localhost:3003/user/deleteUser/${userId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                fetchUsers();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                setError('An error occurred while deleting the user. Please try again later.');
            });
    };

    const handleVerifyClick = (userId) => {
        fetch(`http://localhost:3003/user/verifyUser/${userId}`, {
            method: 'PUT'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to verify user');
                }
                fetchUsers();
            })
            .catch(error => {
                console.error('Error verifying user:', error);
                setError('An error occurred while verifying the user. Please try again later.');
            });
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setEditedName(user.Name);
        setEditedEmail(user.Email);
        setIsEditModalOpen(true);
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3003/user/updateUser/${selectedUser._UserId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name: editedName, Email: editedEmail })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user');
                }
                setIsEditModalOpen(false);
                fetchUsers();
            })
            .catch(error => {
                console.error('Error updating user:', error);
                setError('An error occurred while updating the user. Please try again later.');
            });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        fetch('http://localhost:3003/user/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name: newUserName, Email: newUserEmail })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add user');
                }
                setIsAddModalOpen(false);
                setNewUserName('');
                setNewUserEmail('');
                fetchUsers();
            })
            .catch(error => {
                console.error('Error adding user:', error);
                setError('An error occurred while adding the user. Please try again later.');
            });
    };

    return (
        <div className="container-box">
       

            {isAddModalOpen && (
                <div className="edit-modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsAddModalOpen(false)}>&times;</span>
                        <h2>Add User</h2>
                        <form onSubmit={handleAddUser}>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                                required
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                value={newUserEmail}
                                onChange={(e) => setNewUserEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            )}

            {isEditModalOpen && selectedUser && (
                <div className="edit-modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsEditModalOpen(false)}>&times;</span>
                        <h2>Edit User</h2>
                        <form onSubmit={handleEditSave}>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                required
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                value={editedEmail}
                                onChange={(e) => setEditedEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            )}

            {error && <div className="error">Error: {error}</div>}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Verify</th>
                        <th>Edit</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._UserId}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>
                                <button className="delete" onClick={() => handleDeleteClick(user._UserId)}>Delete</button>
                            </td>
                            <td>
                                {!user.Verified && (
                                    <button className="verify" onClick={() => handleVerifyClick(user._UserId)}>Verify</button>
                                )}
                            </td>
                            <td>
                                <button className="edit" onClick={() => handleEditClick(user)}>Edit</button>
                               
                            </td>
                            <td>
                            <button className="add-user" onClick={() => setIsAddModalOpen(true)}>Add </button>
                               
                            </td>   
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;






