/* eslint-env jest */
import React from 'react';
import { createContainer } from './domManipulators';
import { AppointmentForm } from '../src/AppointmentFrom';

describe('AppointmentForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = (id) => container.querySelector(`form[id=${id}]`);

  it('renders a from', () => {
    render(<AppointmentForm />);
    expect(form('appointment')).not.toBeNull();
  });
});
