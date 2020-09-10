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
          <button type="button">{appointTimeOfDay(appointment.startsAt)}</button>
        </li>
      ))}
    </ol>
    {appointments.length === 0
      ? (<p>There are no appointments scheduled for today.</p>)
      : (<Appointment {...appointments[0]} />)}
  </div>
);
