import React, { useState } from 'react';

export const CustomerForm =
  ({ firstName, lastName, phoneNumber, onSubmit }) => {
  const [customer, setCustomer] =
    useState({ firstName, lastName, phoneNumber });

  const handleChange = ({ target }) => {
    return setCustomer(customer => ({
      ...customer,
      [target.name]: target.value,
    }));
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor='firstName'>First name</label>
      <input type="text" id="firstName" name="firstName"
        value={firstName} onChange={handleChange}>
      </input>
      <label htmlFor='lastName'>Last name</label>
      <input type="text" id="lastName" name="lastName"
        value={lastName} onChange={handleChange}>
      </input>
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="text" id="phoneNumber" name="phoneNumber"
        value={phoneNumber} onChange={handleChange}>
      </input>
      <input type="submit" value="Add" />
    </form>
  );
};
