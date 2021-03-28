import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleNameChange = (e) => {
    let nameChange = e.target.value;
    setName(nameChange);
  };

  const handlePhoneChange = (e) => {
    let phoneChange = e.target.value;
    setPhone(phoneChange);
  };

  const handleEmailChange = (e) => {
    let emailChange = e.target.value;
    setEmail(emailChange);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleNameChange}
        type="text"
        id="name"
        name="name"
        placeholder="Enter Name"
        value={name}
      />
      <br></br>
      <input
        onChange={handleEmailChange}
        value={email}
        type="email"
        id="email"
        name="email"
        placeholder="Enter Email"
      />
      <br></br>
      <input
        onChange={handlePhoneChange}
        value={phone}
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter Phone: ex. 555-555-5555"
      />
      <br></br>
      <button id="submit-form">Add Contact</button>
    </form>
  );
};
