import React from "react";
import { shallow } from "enzyme";
import { ContactsPage } from "../containers/contactsPage/ContactsPage";

const wrapper = shallow(<ContactsPage />);

describe("<ContactsPage/> Component", () => {
  it("renders correctly", () => {
    shallow(<ContactsPage />);
  });
});
