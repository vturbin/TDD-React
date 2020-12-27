import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => {
  const selector = `[data-test="${val}"]`;
  return wrapper.find(selector);
} 

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,"component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button");
  expect(button.length).toBe(1)
});


test("renders counter display", () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper,"counter-display");
  expect(display.length).toBe(1)
});


test("counter starts at 0", () => {

});

test("clicking on button increments counter display", () => {

});
