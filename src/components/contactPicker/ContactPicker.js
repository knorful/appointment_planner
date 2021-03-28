import React from "react";

export const ContactPicker = ({ contacts, handleContactChange }) => {
  return (
    <select name="contacts" id="contacts" onChange={handleContactChange}>
      <option value="" selected="selected" disabled hidden>
        Choose Contact
      </option>
      {contacts.map((contact, i) => (
        <option key={i}>{Object.values(contact)[0]}</option>
      ))}
    </select>
  );
};
