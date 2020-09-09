import React from 'react';

const appointTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appointment = ({ customer: { firstName } }) => {
  return <div>{firstName}</div>;
};

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment) => (
        <li key={appointment.startsAt}>
          {appointTimeOfDay(appointment.startsAt)}
        </li>
      ))}
    </ol>
  </div>
);
