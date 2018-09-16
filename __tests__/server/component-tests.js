import { ProductsComponent } from "./../../front-end/scripts/components/products-component";

const jsdom = require('jsdom'); 
const { JSDOM } = jsdom;
const dom = new JSDOM(); 
const window = dom.window; 
const document = window.document; 
global.document = document;

test("create div element for each product", () => {
    let p = 
    {
        name: "123456789012345678901234567890",
        id: 20,
        description: "123456789012345678901234567890",
        image: "img"
    };
    new ProductsComponent(null, [p]);

    expect(document.children.length).toBe(1);
})