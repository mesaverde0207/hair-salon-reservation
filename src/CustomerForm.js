import React, { useState } from 'react';

export const CustomerForm = ({ firstName, onSubmit }) => {
  const [customer, setCustomer] = useState({ firstName });
  const handleChangeFirstName = ({ target }) => {
    return setCustomer(customer => ({
      ...customer,
      firstName: target.value,
    }));
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor='firstName'>First name</label>
      <input type="text" id="firstName" name="firstName"
        value={firstName} onChange={handleChangeFirstName}>
      </input>
    </form>
  );
};
