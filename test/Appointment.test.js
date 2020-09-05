/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'Alice' };
    const container = document.createElement('div');
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Alice');
  });

  it('renders another customer first name', () => {
    const customer = { firstName: 'Bob' };
    const container = document.createElement('div');
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Bob');
  });
});
