import React from "react";
import { shallow, mount } from "enzyme";
import { ContactsPage } from "../containers/contactsPage/ContactsPage";

describe("<ContactsPage/> Component", () => {
  // let wrapper;
  // let props = {
  //   contacts: { name: "Kris", number: "5016580226", email: "kris@email.com" },
  //   addContact: jest.fn(),
  // };

  // beforeEach(() => {
  //   wrapper = mount(<ContactsPage {...props} />);
  // });

  it("renders correctly", () => {
    shallow(<ContactsPage />);
  });
});
