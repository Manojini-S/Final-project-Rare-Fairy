// import './userdetails.css';
// import './Admin.css';
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

//     const handleEditClick = (user) => {
//         setSelectedUser(user);
//         setEditedName(user.Name);
//         setEditedEmail(user.Email);
//         setIsEditModalOpen(true);
//     };

//     const handleEditSave = (e) => {
//         e.preventDefault();
//         fetch(`http://localhost:3003/user/updateUser/${selectedUser._id}`, {
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
//                                 required
//                             />
//                             <label>Email:</label>
//                             <input
//                                 type="email"
//                                 value={editedEmail}
//                                 onChange={(e) => setEditedEmail(e.target.value)}
//                                 required
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
//                         <th>Edit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.Name}</td>
//                             <td>{user.Email}</td>
//                             <td>
//                                 <button className="delete" onClick={() => handleDeleteClick(user._id)}>Delete</button>
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





// import './userdetails.css';
// import './Admin.css';
// import React, { useState, useEffect } from 'react';

// const UserTable = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState('');
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [editedName, setEditedName] = useState('');
//     const [editedEmail, setEditedEmail] = useState('');
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

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

//     const handleEditClick = (user) => {
//         setSelectedUser(user);
//         setIsConfirmationOpen(true);
//     };

//     const handleEditConfirm = () => {
//         setEditedName(selectedUser.Name);
//         setEditedEmail(selectedUser.Email);
//         setIsEditModalOpen(true);
//         setIsConfirmationOpen(false);
//     };

//     const handleEditCancel = () => {
//         setSelectedUser(null);
//         setIsConfirmationOpen(false);
//     };

//     const handleEditSave = (e) => {
//         e.preventDefault();
//         fetch(`http://localhost:3003/user/updateUser/${selectedUser._id}`, {
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

//     return (
//         <div className="container-box">
//             {isConfirmationOpen && (
//                 <div className="confirmation-modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={handleEditCancel}>&times;</span>
//                         <h2>Confirm Edit</h2>
//                         <p>Are you sure you want to edit this user?</p>
//                         <button onClick={handleEditConfirm}>Yes</button>
//                         <button onClick={handleEditCancel}>No</button>
//                     </div>
//                 </div>
//             )}
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
//                                 required
//                             />
//                             <label>Email:</label>
//                             <input
//                                 type="email"
//                                 value={editedEmail}
//                                 onChange={(e) => setEditedEmail(e.target.value)}
//                                 required
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
//                         <th>Edit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.Name}</td>
//                             <td>{user.Email}</td>
//                             <td>
//                                 <button className="delete" onClick={() => handleDeleteClick(user._id)}>Delete</button>
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
    const [isEditConfirmationOpen, setIsEditConfirmationOpen] = useState(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

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

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditConfirmationOpen(true);
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setIsDeleteConfirmationOpen(true);
    };

    const handleEditConfirm = () => {
        setEditedName(selectedUser.Name);
        setEditedEmail(selectedUser.Email);
        setIsEditModalOpen(true);
        setIsEditConfirmationOpen(false);
    };

    const handleDeleteConfirm = () => {
        deleteHandler(selectedUser._id);
        setIsDeleteConfirmationOpen(false);
    };

    const handleEditCancel = () => {
        setSelectedUser(null);
        setIsEditConfirmationOpen(false);
    };

    const handleDeleteCancel = () => {
        setSelectedUser(null);
        setIsDeleteConfirmationOpen(false);
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3003/user/updateUser/${selectedUser._id}`, {
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

    const deleteHandler = (userId) => {
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

    return (
        <div className="container-box">
            {isEditConfirmationOpen && (
                <div className="confirmation-modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleEditCancel}>&times;</span>
                        <h2>Confirm Edit</h2>
                        <p>Are you sure you want to edit this user?</p>
                        <button onClick={handleEditConfirm}>Yes</button>
                        <button onClick={handleEditCancel}>No</button>
                    </div>
                </div>
            )}
            {isDeleteConfirmationOpen && (
                <div className="confirmation-modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleDeleteCancel}>&times;</span>
                        <h2>Confirm Delete</h2>
                        <p>Are you sure you want to delete this user?</p>
                        <button onClick={handleDeleteConfirm}>Yes</button>
                        <button onClick={handleDeleteCancel}>No</button>
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
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>
                                <button className="delete" onClick={() => handleDeleteClick(user)}>Delete</button>
                            </td>
                            <td>
                                <button className="edit" onClick={() => handleEditClick(user)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
