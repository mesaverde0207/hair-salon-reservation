const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: {
      firstName: 'Alice',
      lastName: 'Sandoval',
      phoneNumber: '555-105-8228',
      stylist: 'Adam Turner',
    },
  },
  {
    startsAt: at(10),
    customer: {
      firstName: 'Bob',
      lastName: 'Sandoval',
      phoneNumber: '555-453-3941',
      stylist: 'Bella Byrd',
    },
  },
  {
    startsAt: at(11),
    customer: {
      firstName: 'Charles',
      lastName: 'Strickland',
      phoneNumber: '555-767-0068',
      stylist: 'Christopher Knight',
    },
  },
  {
    startsAt: at(12),
    customer: {
      firstName: 'Daisy',
      lastName: 'Mejia',
      phoneNumber: '555-118-6070',
      stylist: 'Adam Turner',
    },
  },
  {
    startsAt: at(13),
    customer: {
      firstName: 'Edward',
      lastName: 'Palmer',
      phoneNumber: '555-873-4563',
      stylist: 'Bella Byrd',
    },
  },
  {
    startsAt: at(14),
    customer: {
      firstName: 'Felicity',
      lastName: 'Alexander',
      phoneNumber: '555-887-8174',
      stylist: 'Christopher Knight',
    },
  },
  {
    startsAt: at(15),
    customer: {
      firstName: 'George',
      lastName: 'Mann',
      phoneNumber: '555-664-7286',
      stylist: 'Adam Turner',
    },
  },
  {
    startsAt: at(16),
    customer: {
      firstName: 'Hannah',
      lastName: 'Wise',
      phoneNumber: '555-666-1410',
      stylist: 'Bella Byrd',
    },
  },
  {
    startsAt: at(17),
    customer: {
      firstName: 'Isaac',
      lastName: 'Thornton',
      phoneNumber: '555-424-2540',
      stylist: 'Christopher Knight',
    },
  },
];
