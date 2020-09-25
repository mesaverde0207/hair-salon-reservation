import React from 'react';

export const CustomerForm = ({ firstName }) => (
  <form id="customer">
    <label htmlFor='firstName'>First name</label>
    <input readOnly type="text" name="firstName" value={firstName}>
    </input>
  </form>
);
