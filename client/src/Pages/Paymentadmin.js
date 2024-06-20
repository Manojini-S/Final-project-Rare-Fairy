import React, { useState, useEffect } from 'react';
import './Paymentadmin.css';

const PaymentTable = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('https://final-project-rare-fairy-backend.onrender.com/payment/payment'); // Corrected endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch payments');
        }
        const paymentsData = await response.json();
        setPayments(paymentsData.data); // Assuming paymentsData contains an array under 'data'
      } catch (error) {
        console.error('Error fetching payments:', error);
        setError('An error occurred while fetching payments. Please try again later.');
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="table-container">
         <h1 className="order">Payments</h1>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              {/* <th>Payment ID</th> */}
              <th>Name</th>
              <th>Paid By</th>
              <th>Order ID</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment._id}>

                <td>{payment.PaidAmount}</td>
                <td>{payment.PaidBy}</td>
                <td>{payment.OrderId}</td>
                <td>{payment.PaymentType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentTable;
