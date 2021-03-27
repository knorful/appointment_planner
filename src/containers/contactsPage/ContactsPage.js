import React, { useState } from "react";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;

    let hasError = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!hasError) {
      setName(name);
      setPhone(phone);
      setEmail(email);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  console.log("name: ", name);
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" placeholder="Enter Name" />
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
          />
          <br></br>
          <input
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
      </section>
    </div>
  );
};
