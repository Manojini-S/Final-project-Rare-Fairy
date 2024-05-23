import './userdetails.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3003/user/getuser')
            .then(response => setUsers(response.data))
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('An error occurred while fetching users. Please try again later.');
            });
    }, []);

    return (
        <div>
            
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th> 
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>

                            {/* <th>Product Types</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._UserId}>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>
                                    <button className='edit' type='button'>Edit</button>
                                    <button className='delete' type='button'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserTable;



// import React, { useState } from 'react';
// import axios from 'axios';

// function Form() {
//     const [Title, setTitle] = useState('');
//     const [Created_By, setCreatedBy] = useState('');
//     const [Created_Date, setCreatedOn] = useState('');
//     const [Content, setContent] = useState('');
//     const [Status, setStatus] = useState('');
//     const [error, setError] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const userData = {
//             Title,
//             Created_By,
//             Created_Date,
//             Content,
//             Status
//         };
//         try {
//             // Make a POST request to the server
//             const response = await axios.post('http://localhost:3004/notes', userData);
//             console.log('Response:', response.data);
//         } catch (error) {
//             // Handle errors
//             console.error('Error:', error);
//             setError('An error occurred while processing your request. Please try again later.');
//         }
//     };

//     return (
//         <div className='form'>
//             <div className='App2'>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="title">Ari Id</label>
//                     <input type="text" className="form-control" id="title" placeholder="Enter Title" onChange={(e) => setariId(e.target.value)} />
//                     <label htmlFor="createdOn">Image Id</label>
//                     <input type="text" className="form-control" id="createdOn" placeholder="Enter Created On" onChange={(e) => setimageId(e.target.value)} />
//                     <label htmlFor="createdBy">Tittle</label>
//                     <input type="text" className="form-control" id="createdBy" placeholder="Enter Created By" onChange={(e) => setTittle(e.target.value)} />
//                     <label htmlFor="content">Content</label>
//                     <input type="text" className="form-control" id="content" placeholder="Enter Content" onChange={(e) => setContent(e.target.value)} />
//                     <label htmlFor="status">Status</label>
//                     <input type="date" className="form-control" id="status" onChange={(e) => setStatus(e.target.value)} />
//                     <br />
//                     <button type="submit">Submit</button>
//                 </form>
//                 {error && <div>Error: {error}</div>}
//             </div>
//         </div>
//     );
// }

// export default Form;
