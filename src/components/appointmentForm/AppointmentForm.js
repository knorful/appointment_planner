import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    let titleChange = e.target.value;
    setTitle(titleChange);
  };

  const handleDateChange = (e) => {
    let dateChange = e.target.value;
    setDate(dateChange);
  };

  const handleTimeChange = (e) => {
    let timeChange = e.target.value;
    setTime(timeChange);
  };

  const handleContactChange = (e) => {
    let contactChange = e.target.value;
    setContact(contactChange);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tile"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={handleDateChange}
        min={getTodayString()}
      />
      <input
        type="time"
        name="time"
        id="time"
        value={time}
        onChange={handleTimeChange}
      />
      <ContactPicker
        contacts={contacts}
        handleContactChange={handleContactChange}
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
