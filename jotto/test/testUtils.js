import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper,val) => {
    const selector = `[data-test="${val}"]`;
    return wrapper.find(selector);
}

export const checkProps= (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes,
        conformingProps,
        'prop',
        component.name)
        expect(propError).toBeUndefined();
}