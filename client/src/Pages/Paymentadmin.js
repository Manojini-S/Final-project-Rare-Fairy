import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Paymentadmin.css';

const PaymentTable = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3003/user/getPayment')
      .then(response => setPayments(response.data))
      .catch(error => {
        console.error('Error fetching payments:', error);
        setError('An error occurred while fetching payments. Please try again later.');
      });
  }, []);

  return (
    <div className="table-container">
      <h2>Payments</h2>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              {/* <th>Payment ID</th> */}
              <th>Paidamount</th>
              <th>Paid By</th>
              <th>Order ID</th>
              <th>Type</th>
            
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment._id}>
                
                <td>{payment.paidAmount}</td>
                <td>{payment.paidBy}</td>
                <td>{payment.orderId}</td>
                <td>{payment.paymentType}</td>
                <td>
               
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentTable;
