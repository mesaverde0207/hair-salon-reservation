const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: { firstName: 'Alice', lastName: 'Sandoval'}
  },
  {
    startsAt: at(10),
    customer: { firstName: 'Bob', lastName: 'Sandoval'}
  },
  {
    startsAt: at(11),
    customer: { firstName: 'Charles', lastName: 'Strickland'}
  },
  {
    startsAt: at(12),
    customer: { firstName: 'Daisy', lastName: 'Mejia'}
  },
  {
    startsAt: at(13),
    customer: { firstName: 'Edward', lastName: 'Palmer'}
  },
  {
    startsAt: at(14),
    customer: { firstName: 'Felicity', lastName: 'Alexander'}
  },
  {
    startsAt: at(15),
    customer: { firstName: 'George', lastName: 'Mann'}
  },
  {
    startsAt: at(16),
    customer: { firstName: 'Hannah', lastName: 'Wise'}
  },
  {
    startsAt: at(17),
    customer: { firstName: 'Isaac', lastName: 'Thornton'}
  },
];
