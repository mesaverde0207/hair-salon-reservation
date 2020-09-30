/* eslint-env jest */
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
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
  const field = (name) => form('customer').elements[name];

  it('renders a form', () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull();
  });

  const itRendersAsATextBox = (fieldName) =>
    it('renders as a text box', () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });

  const itIncludesTheExistingValue = (fieldName) =>
    it('includes the existing value', () => {
      render(<CustomerForm { ...{[fieldName]: 'value'} } />);
      expect(field(fieldName).value).toEqual('value');
    });

  const itRendersALabel = (fieldName, text) =>
    it('renders a label', () => {
      render(<CustomerForm { ...{[fieldName]: 'value'} } />);
      expect(labelFor(fieldName).textContent).toEqual(text);
    });

  const itAssignsAnIDThatMatchesTheLabelID = (fieldName, labelId) =>
    it('assigns an id that matches the label id', () => {
      render(<CustomerForm { ...{[fieldName]: 'value'} } />);
      expect(field(fieldName).id).toEqual(labelId);
    });

  const itSavesExistingValueWhenSubmitted = (fieldName, value) =>
    it('saves existing value when submitted', () => {
      expect.hasAssertions();
      render(
        <CustomerForm { ...{[fieldName]: value} }
          onSubmit={ (props) =>
            expect(props[fieldName]).toEqual(value)} />);
      ReactTestUtils.Simulate.submit(form('customer'));
    });

  const itSavesNewValueWhenSubmitted = (fieldName, newValue) =>
    it('saves new value when submitted', () => {
      expect.hasAssertions();
      render(
        <CustomerForm { ...{[fieldName]: 'value'} }
          onSubmit={ (props) =>
            expect(props[fieldName]).toEqual(newValue)} />
      );
      ReactTestUtils.Simulate.change(field(fieldName), {
        target: { value: newValue }
      });
      ReactTestUtils.Simulate.submit(form('customer'));
    });

  describe('first name field', () => {
    const fieldName = 'firstName';
    itRendersAsATextBox(fieldName);
    itIncludesTheExistingValue(fieldName);
    itRendersALabel(fieldName, 'First name');
    itAssignsAnIDThatMatchesTheLabelID(fieldName, 'firstName');
    itSavesExistingValueWhenSubmitted(fieldName, 'Alice');
    itSavesNewValueWhenSubmitted(fieldName, 'Bob');
  });
});
