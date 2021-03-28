import React, { useState } from "react";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    let nameChange = e.target.value;
    setName(nameChange);
  };

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    let phoneChange = e.target.value;
    setPhone(phoneChange);
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    let emailChange = e.target.value;
    setEmail(emailChange);
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    let hasError = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!hasError) {
      addContact(name, phone, email);
      setError("");
      setName("");
      setPhone("");
      setEmail("");
    } else {
      setError("Error! Name already exists!");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {error ? <span>{error}</span> : null}
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
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter Phone"
          />
          <br></br>
          <button id="submit-form">Add Contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <h3>{name}</h3>
      </section>
    </div>
  );
};
