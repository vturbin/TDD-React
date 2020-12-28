import App from './App';
import {mount} from "enzyme";
import {findByTestAttr} from "../test/testUtils";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();


const setup = () => {
    mockGetSecretWord.mockClear();
    hookActions.getSecretWord = mockGetSecretWord;

    // Use mount, because useEffect not called on 'shallow'
    return mount(<App/>)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-app')
    expect(component.length).toBe(1);
});


describe('getSecretWord calls',()=> {
    test('getSecretWord gets called on App mount', ()=> {
        setup();

        // check to see if secret word was updated
        expect(mockGetSecretWord).toHaveBeenCalled();
    })
})