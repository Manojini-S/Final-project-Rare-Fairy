
// import React, { useState, useEffect, useRef } from "react";
// import "./productadmin.css";
// import emailjs from "@emailjs/browser";

// function OrderList() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showEmailForm, setShowEmailForm] = useState(false);
//   const form = useRef();

//   useEffect(() => {
//     // Fetch orders when the component mounts
//     fetch("http://localhost:3003/order/orders")
//       .then((response) => response.json())
//       .then((data) => {
//         setOrders(data); // Set fetched orders to state
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders. Please try again later.");
//       });
//   }, []);

//   const handleAccept = (orderId) => {
//     console.log(`Accepting order with ID: ${orderId}`);
//     fetch(`http://localhost:3003/order/orders/${orderId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: "accepted" }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Order accepted:", data);
//         setOrders(
//           orders.map((order) => (order._id === orderId ? data : order))
//         );
//         setSelectedOrder(data);
//         setShowEmailForm(true);
//       })
//       .catch((error) => {
//         console.error("Error accepting order:", error);
//       });
//   };

//   const handleReject = (orderId) => {
//     console.log(`Rejecting order with ID: ${orderId}`);
//     fetch(`http://localhost:3003/order/orders/${orderId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: "rejected" }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Order rejected:", data);
//         setOrders(
//           orders.map((order) => (order._id === orderId ? data : order))
//         );
//       })
//       .catch((error) => {
//         console.error("Error rejecting order:", error);
//       });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7v4vmve",
//         "template_gswksyh",
//         form.current,
//         "hpy_Ow2NKTCTlRRDq"
//       )
//       .then(
//         () => {
//           console.log("Email sent successfully!");
//           setShowEmailForm(false);
//         },
//         (error) => {
//           console.log("Failed to send email...", error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <h1 className="order">Order List</h1>
//       {error && <p>{error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact Number</th>
//             <th>Address</th>
//             <th>Deadline</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td>{order.name}</td>
//               <td>{order.email}</td>
//               <td>{order.contactNumber}</td>
//               <td>{order.address}</td>
//               <td>{new Date(order.deadline).toLocaleDateString()}</td>
//               <td>
//                 <button
//                   className="accept"
//                   onClick={() => handleAccept(order._id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   className="reject"
//                   onClick={() => handleReject(order._id)}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showEmailForm && (
//         <form ref={form} onSubmit={sendEmail}>
//           <label>Name</label>
//           <input
//             type="text"
//             name="user_name"
//             defaultValue={selectedOrder ? selectedOrder.name : ""}
//             readOnly
//           />
//           <label>Email</label>
//           <input
//             type="email"
//             name="user_email"
//             defaultValue={selectedOrder ? selectedOrder.email : ""}
//             readOnly
//           />
//           <label>Message</label>
//           <textarea name="message"></textarea>
//           <input type="submit" value="Send" />
//         </form>
//       )}
//     </div>
//   );
// }

// export default OrderList;

// import React, { useState, useEffect, useRef } from "react";
// import "./productadmin.css";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function OrderList() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showEmailForm, setShowEmailForm] = useState(false);
//   const form = useRef();

//   useEffect(() => {
//     // Fetch orders when the component mounts
//     fetchOrders();
//   }, []);

//   const fetchOrders = () => {
//     fetch("http://localhost:3003/order/orders")
//       .then((response) => response.json())
//       .then((data) => {
//         setOrders(data); // Set fetched orders to state
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders. Please try again later.");
//       });
//   };

//   const handleAccept = (orderId) => {
//     console.log(`Accepting order with ID: ${orderId}`);
//     fetch(`http://localhost:3003/order/orders/${orderId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: "accepted" }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Order accepted:", data);
//         setOrders(
//           orders.map((order) => (order._id === orderId ? data : order))
//         );
//         setSelectedOrder(data);
//         setShowEmailForm(true);
//         toast.success("Order accepted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error accepting order:", error);
//         toast.error("Failed to accept the order.");
//       });
//   };
//   const handleReject = (orderId) => {
//     console.log(`Rejecting order with ID: ${orderId}`);
//     fetch(`http://localhost:3003/order/orders/${orderId}`, {
//       method: "PATCH",  // Using PATCH method for partial update
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: "rejected" }),  // Updating only the status field
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to reject order");  // Throw error if response is not ok
//         }
//         return response.json();  // Parse response as JSON
//       })
//       .then((data) => {
//         console.log("Order rejected:", data);
//         // Update local state or UI as needed
//         toast.success("Order rejected successfully!");
//       })
//       .catch((error) => {
//         console.error("Error rejecting order:", error);
//         toast.error("Failed to reject the order.");
//       });
//   };
  

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7v4vmve",
//         "template_gswksyh",
//         form.current,
//         "hpy_Ow2NKTCTlRRDq"
//       )
//       .then(
//         () => {
//           console.log("Email sent successfully!");
//           setShowEmailForm(false);
//         },
//         (error) => {
//           console.log("Failed to send email...", error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <h1 className="order">Order List</h1>
//       {error && <p>{error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact Number</th>
//             <th>Address</th>
//             <th>Deadline</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td>{order.name}</td>
//               <td>{order.email}</td>
//               <td>{order.contactNumber}</td>
//               <td>{order.address}</td>
//               <td>{new Date(order.deadline).toLocaleDateString()}</td>
//               <td>
//                 <button
//                   className="accept"
//                   onClick={() => handleAccept(order._id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   className="reject"
//                   onClick={() => handleReject(order._id)}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showEmailForm && (
//         <form ref={form} onSubmit={sendEmail}>
//           <label>Name</label>
//           <input
//             type="text"
//             name="user_name"
//             defaultValue={selectedOrder ? selectedOrder.name : ""}
//             readOnly
//           />
//           <label>Email</label>
//           <input
//             type="email"
//             name="user_email"
//             defaultValue={selectedOrder ? selectedOrder.email : ""}
//             readOnly
//           />
//           <label>Message</label>
//           <textarea name="message"></textarea>
//           <input type="submit" value="Send" />
//         </form>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default OrderList;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";
import "./productadmin.css";
import Admin from "../Pages/Admin";
import customer02 from "../Assets/customer02.jpeg";
import Modal from "../Components/Modal";
import ProductForm from "./Addproduct";

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const form = useRef();

  useEffect(() => {
    fetchUsersCount();
    fetchOrdersCount();
    fetchProductsCount();
    fetchOrders();
  }, []);

  const fetchUsersCount = async () => {
    try {
      const response = await fetch("http://localhost:3003/user/count");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsersCount(data.count);
    } catch (error) {
      console.error("Error fetching users count:", error);
    }
  };

  const fetchOrdersCount = async () => {
    try {
      const response = await fetch("http://localhost:3003/orders/count");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setOrdersCount(data.count);
    } catch (error) {
      console.error("Error fetching orders count:", error);
    }
  };

  const fetchProductsCount = async () => {
    try {
      const response = await fetch("http://localhost:3003/products/count");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductsCount(data.count);
    } catch (error) {
      console.error("Error fetching products count:", error);
    }
  };

  const fetchOrders = () => {
    fetch("http://localhost:3003/order/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again later.");
      });
  };

  const handleAccept = (orderId) => {
    fetch(`http://localhost:3003/order/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "accepted" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(orders.map((order) => (order._id === orderId ? data : order)));
        setSelectedOrder(data);
        setShowEmailForm(true);
        toast.success("Order accepted successfully!");
      })
      .catch((error) => {
        console.error("Error accepting order:", error);
        toast.error("Failed to accept the order.");
      });
  };

  const handleReject = (orderId) => {
    fetch(`http://localhost:3003/order/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "rejected" }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to reject order");
        }
        return response.json();
      })
      .then((data) => {
        setOrders(orders.filter((order) => order._id !== orderId));
        toast.success("Order rejected successfully!");
      })
      .catch((error) => {
        console.error("Error rejecting order:", error);
        toast.error("Failed to reject the order.");
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7v4vmve",
        "template_gswksyh",
        form.current,
        "hpy_Ow2NKTCTlRRDq"
      )
      .then(
        () => {
          console.log("Email sent successfully!");
          setShowEmailForm(false);
        },
        (error) => {
          console.log("Failed to send email...", error.text);
        }
      );
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfully!");
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>Rare Fairy</h2>
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link to="/Dashboard">
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/OrderList">
                <i className="fas fa-shopping-cart"></i> Order
              </Link>
            </li>
            <li>
              <Link to="/Admin">
                <i className="fas fa-users"></i> Users
              </Link>
            </li>
            <li>
              <a href="/product">
                <i className="fas fa-box-open"></i> Product{" "}
              </a>
            </li>
            <li>
              <Link to="/payment">
                <i className="fas fa-credit-card"></i> Payment
              </Link>
            </li>
            <li>
              <Link className="a" to="/login" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <div className="header">
            <div className="header-left">
              <h1>Welcome to Admin</h1>
            </div>
            <div className="header-right">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="notification">
                <i className="fas fa-bell"></i>
              </div>
              <div className="profile">
                <img src={customer02} alt="Profile" />
                <span>Manojini Suthakar</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="card-dash">
              <h3>Users</h3>
              <p>Number of active users: {usersCount}</p>
            </div>
            <div className="card-dash">
              <h3>Order</h3>
              <p>Number of orders: {ordersCount}</p>
            </div>
            <div className="card-dash">
              <Link to="/Addproduct" onClick={handleShow}>
                <h3>Add product</h3>
                <p>Number of products: {productsCount}</p>
              </Link>
            </div>
          </div>
          <h1 className="order">Order List</h1>
          {error && <p>{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.contactNumber}</td>
                  <td>{order.address}</td>
                  <td>{new Date(order.deadline).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="accept"
                      onClick={() => handleAccept(order._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="reject"
                      onClick={() => handleReject(order._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showEmailForm && (
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                defaultValue={selectedOrder ? selectedOrder.name : ""}
                readOnly
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                defaultValue={selectedOrder ? selectedOrder.email : ""}
                readOnly
              />
              <label>Message</label>
              <textarea name="message"></textarea>
              <input type="submit" value="Send" />
            </form>
          )}
         
        </div>
      </div>
      <Modal show={showModal} handleClose={handleClose}>
        <ProductForm />
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AdminDashboard;
