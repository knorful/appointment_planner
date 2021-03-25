import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";

const wrapper = shallow(<App />);

describe("<App/> Component", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });

  it("should have contacts initialized to empty array", () => {
    expect(wrapper.find("contacts")).toEqual(expect.arrayContaining([]));
  });

  it("should have appointments initialized to empty array", () => {
    expect(wrapper.find("appointments")).toEqual(expect.arrayContaining([]));
  });

  //   describe(".addContact", () => {
  //       it('')
  //   })
});
