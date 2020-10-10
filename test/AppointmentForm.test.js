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
  const field = (name) => form('appointment').elements[name];

  it('renders a from', () => {
    render(<AppointmentForm />);
    expect(form('appointment')).not.toBeNull();
  });

  describe('service field', () => {
    it('renders as a select box', () => {
      render(<AppointmentForm />);
      expect(field('service')).not.toBeNull();
      expect(field('service').tagName).toEqual('SELECT');
    });
  });
});
