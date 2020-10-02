import React, { useState } from 'react';

export const CustomerForm = ({ firstName, lastName, onSubmit }) => {
  const [customer, setCustomer] = useState({ firstName, lastName });
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

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor='firstName'>First name</label>
      <input type="text" id="firstName" name="firstName"
        value={firstName} onChange={handleChangeFirstName}>
      </input>
      <label htmlFor='lastName'>Last name</label>
      <input type="text" id="lastName"
        value={lastName} onChange={handleChangeLastName}></input>
    </form>
  );
};
