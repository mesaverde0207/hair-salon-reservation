import React, { useState } from 'react';

export const CustomerForm =
  ({ firstName, lastName, phoneNumber, onSubmit }) => {
  const [customer, setCustomer] =
    useState({ firstName, lastName, phoneNumber });
  const handleChangeFirstName = ({ target }) => {
    return setCustomer(customer => ({
      ...customer,
      firstName: target.value,
    }));
  };
  const handleChangeLastName = ({ target }) => {
    return setCustomer(customer => ({
      ...customer,
      lastName: target.value,
    }));
  };
  const handleChangePhoneNumber = ({ target }) => {
    return setCustomer(customer => ({
      ...customer,
      phoneNumber: target.value,
    }));
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor='firstName'>First name</label>
      <input type="text" id="firstName" name="firstName"
        value={firstName} onChange={handleChangeFirstName}>
      </input>
      <label htmlFor='lastName'>Last name</label>
      <input type="text" id="lastName" name="lastName"
        value={lastName} onChange={handleChangeLastName}>
      </input>
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="text" id="phoneNumber" name="phoneNumber"
        value={phoneNumber} onChange={handleChangePhoneNumber}>
      </input>
    </form>
  );
};
