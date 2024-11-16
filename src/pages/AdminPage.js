// src/pages/AdminPage.js
import React, { useEffect, useState } from 'react';
import './AdminPage.css';

function AdminPage() {
    const [contacts, setContacts] = useState([]);
    const [bookings, setBookings] = useState([]); // État pour les réservations

    useEffect(() => {
        // Fetch contacts from the backend
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://localhost:5002/api/contacts');
                const data = await response.json();
                setContacts(data);
            } catch (err) {
                console.error('Failed to fetch contacts:', err);
            }
        };

        // Fetch bookings from the backend
        const fetchBookings = async () => {
            try {
                const response = await fetch('http://localhost:5002/api/bookings');
                const data = await response.json();
                setBookings(data);
            } catch (err) {
                console.error('Failed to fetch bookings:', err);
            }
        };

        fetchContacts();
        fetchBookings(); // Récupérer les réservations
    }, []);

    const handleDeleteBooking = async (bookingId) => {
        try {
            const response = await fetch(`http://localhost:5002/api/bookings/${bookingId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBookings(bookings.filter(booking => booking._id !== bookingId)); // Met à jour l'état local
                alert('Booking deleted successfully');
            } else {
                alert('Failed to delete booking');
            }
        } catch (err) {
            console.error('Failed to delete booking:', err);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="admin-page">
            <h2>Admin Page - Contact List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Admin Page - Booking List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th> {/* Nouvelle colonne pour le bouton */}
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td>{booking.service}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.name}</td>
                            <td>{booking.phone}</td>
                            <td>
                                <button
                                    className="bin-button"
                                    onClick={() => handleDeleteBooking(booking._id)}
                                >
                                    <svg
                                        className="bin-top"
                                        viewBox="0 0 39 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                                        <line
                                            x1="12"
                                            y1="1.5"
                                            x2="26.0357"
                                            y2="1.5"
                                            stroke="white"
                                            strokeWidth="3"
                                        ></line>
                                    </svg>
                                    <svg
                                        className="bin-bottom"
                                        viewBox="0 0 33 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask id="path-1-inside-1_8_19" fill="white">
                                            <path
                                                d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                            ></path>
                                        </mask>
                                        <path
                                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                            fill="white"
                                            mask="url(#path-1-inside-1_8_19)"
                                        ></path>
                                        <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                                        <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;
