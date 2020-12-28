import App from './App';
import {shallow} from "enzyme";
import {findByTestAttr} from "../test/testUtils";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const setup = () => {
    return shallow(<App/>)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-app')
    expect(component.length).toBe(1);
});
