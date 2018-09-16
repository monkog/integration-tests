import file from './../data.json';

const promiseProducts = Promise.resolve({ json: () => file.products });
const spy = jest.fn();
spy.mockReturnValue(promiseProducts);

export default spy;