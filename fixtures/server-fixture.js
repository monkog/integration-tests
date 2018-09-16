// export default function fetch(input) {
//     let fetchObject = "cached object sdadfs";
//     let fetchResponse = { json() { return fetchObject } };

//     return fetchResponse;
// };
import file from './../data.json';

export default function fetch() {
    // const fetchStub = jest.fn(() => Promise.resolve({
    //     json: () => dummy,
    // }));

    // const filterTestFn = jest.fn();

    // filterTestFn.mockReturnValueOnce(
    //     Promise.resolve(
    //         {
    //              json(){ return file.products } 
    //     })
    // );
    // return filterTestFn;

    const promiseProducts = Promise.resolve({ json: () => file.products });

    const spy = jest.fn();
    spy.mockReturnValueOnce(promiseProducts);
    return spy;
};

