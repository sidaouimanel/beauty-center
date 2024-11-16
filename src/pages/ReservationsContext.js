// src/contexts/ReservationsContext.jsx
import React, { createContext, useState } from 'react';

export const ReservationsContext = createContext();

export const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations((prevReservations) => [...prevReservations, reservation]);
  };

  return (
    <ReservationsContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationsContext.Provider>
  );
};
