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
  const wrapper = setup();
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("1");
});

test("renders decrement button",()=> {
  const wrapper = setup();
  const decrementBtn = findByTestAttr(wrapper,"decrement-button");
  expect(decrementBtn.length).toBe(1);
})

test("clicking on decrement button decrements counter display",()=> {
  const wrapper = setup();
  const decrementBtn = findByTestAttr(wrapper,"decrement-button");
  decrementBtn.simulate('click');
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0")
} )

test("clicking increment and decrement button results to 0",()=> {
  const wrapper = setup();

  const incrementBtn = findByTestAttr(wrapper,"increment-button");
  incrementBtn.simulate('click');

  const decrementBtn = findByTestAttr(wrapper,"decrement-button");
  decrementBtn.simulate('click');
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0")
} )

test("render error message if decrement btn pressed at count 0", () => {
  const wrapper = setup();
  const decrementBtn = findByTestAttr(wrapper,"decrement-button");
  decrementBtn.simulate('click');
  const errorMsg = findByTestAttr(wrapper, "error-message");
  expect(errorMsg.length).toBe(1);
})

test("remove error when increment button is clicked", () => {
  const wrapper = setup();

  const decrementBtn = findByTestAttr(wrapper,"decrement-button");
  decrementBtn.simulate('click');

  const incrementBtn = findByTestAttr(wrapper,"increment-button");
  incrementBtn.simulate('click');

  const errorMsg = findByTestAttr(wrapper, "error-message");
  expect(errorMsg.length).toBe(0);

})