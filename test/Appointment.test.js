/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Appointment, AppointmentsDayView } from '../src/Appointment';

describe('Appointment', () => {
  let customer;
  let container;
  const render = (conponent) => ReactDOM.render(conponent, container);

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Alice' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Alice');
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Bob' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Bob');
  });
});

describe('AppointmentsDayView', () => {
  let container;
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: 'Alice' },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: 'Bob' },
    },
  ];

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  it('renders multiple appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('ol').children).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(2);
  });

  it('renders each appointment in an li', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
  });

  it('initially show a message saying there are no appointments today', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent)
      .toMatch('There are no appointments scheduled for today');
  });

  it('selects the first appointment by default', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch('Alice');
  });

  it('has a button element in eahc li', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll('li > button')).toHaveLength(2);
    expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
  });

  it('renders another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll('button')[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch('Bob');
  });
});
