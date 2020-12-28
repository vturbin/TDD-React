import {shallow} from "enzyme";
import React from "react";
import Input from "./Input";
import {findByTestAttr,checkProps} from  "../test/testUtils";


const defaultProps ={secretWord:"party"}
/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Input {...setupProps} />)
}


test('renders without errors',()=> {
    const wrapper = setup({});
    const inputComponent = findByTestAttr(wrapper,"input-component")
    expect(inputComponent.length).toBe(1);
})

test('does not throw warning with expected props', () => {
    const expectedProps = {secretWord : "no"};
    checkProps(Input, expectedProps);
})

describe("state controlled input field",()=> {
    let mockSetCurrentGuess=jest.fn();
    let wrapper;
    let inputBox;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState=jest.fn(()=>["",mockSetCurrentGuess]);

        wrapper = setup();
        inputBox = findByTestAttr(wrapper,'input-box');
    })
    test("state updates with value of input box upon change",()=> {

        const mockEvent = {target: {value: 'train'}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
    test("setCurentGuess gets called with an empty string on submit",()=>{

        const sumbitBtn = findByTestAttr(wrapper,'submit-button');
        sumbitBtn.simulate('click',{preventDefault() {}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
});