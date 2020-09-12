const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  { startsAt: at(9),  customer: { firstName: 'Alice'}},
  { startsAt: at(10), customer: { firstName: 'Bob'}},
  { startsAt: at(11), customer: { firstName: 'Charles'}},
  { startsAt: at(12), customer: { firstName: 'Daisy'}},
  { startsAt: at(13), customer: { firstName: 'Edward'}},
  { startsAt: at(14), customer: { firstName: 'Felicity'}},
  { startsAt: at(15), customer: { firstName: 'George'}},
  { startsAt: at(16), customer: { firstName: 'Hannah'}},
  { startsAt: at(17), customer: { firstName: 'Isaac'}},
];
