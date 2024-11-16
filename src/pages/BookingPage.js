import React, { useState } from 'react';
import './BookingPage.css';

function BookingPage() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = { service, date, time, name, phone };

    try {
      const response = await fetch('http://localhost:5002/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking request');
      }

      const data = await response.json();
      console.log('Booking request successful:', data);

      // Réinitialiser les champs du formulaire après un envoi réussi
      setService('');
      setDate('');
      setTime('');
      setName('');
      setPhone('');

      // Optionnel : Afficher une notification de succès à l'utilisateur
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="booking-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/booking.jpg)` }}>
      <div className="booking-container">
        <h2>Book Your Beauty Appointment</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <input
              type="text"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="Enter the service you want"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <button type="submit">Check Availability</button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
