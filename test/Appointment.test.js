/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
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

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });
});
