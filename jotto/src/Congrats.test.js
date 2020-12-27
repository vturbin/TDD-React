import {shallow} from "enzyme";
import React from "react";
import Congrats from "./Congrats";
import {findByTestAttr,checkProps} from  "../test/testUtils";
import checkPropTypes from "check-prop-types";


const defaultProps = {success: false};

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);

});

test('renders no text when "success" prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = {success : false};
    checkProps(Congrats, expectedProps);
})