import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

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
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
