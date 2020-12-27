

export const findByTestAttr = (wrapper,val) => {
    const selector = `[data-test="${val}"]`;
    return wrapper.find(selector);
}