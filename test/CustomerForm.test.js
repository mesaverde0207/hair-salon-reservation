/* eslint-env jest */
import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = id => container.querySelector(`form[id="${id}"]`);
  const labelFor =
    (formElement) => container.querySelector(`label[for="${formElement}"]`);
  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual('text');
  };
  const firstNameField = () => form('customer').elements.firstName;

  it('renders a form', () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull();
  });

  it('renders the first name field as a text box', () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName="Alice" />);
    expect(firstNameField().value).toEqual('Alice');
  });

  it('renders a label for the first name field', () => {
    render(<CustomerForm firstName="Alice" />);
    expect(labelFor('firstName').textContent).toEqual('First name');
  });

  it('assigns an id that matches the label id to the first name field', () => {
    render(<CustomerForm firstName="Alice" />);
    expect(firstNameField().id).toEqual('firstName');
  });
});
