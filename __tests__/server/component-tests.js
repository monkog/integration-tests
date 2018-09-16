import { ProductsComponent } from "./../../front-end/scripts/components/products-component";
import { Product } from "../../front-end/scripts/models/product";

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
    let q = 
    {
        name: "123456789012345678901234567890",
        id: 20,
        description: "123456789012345678901234567890",
        image: "img"
    };
    new ProductsComponent(document, [p, q]);

    expect(document.firstChild.children.length).toBe(2);
})

test("name of product is rendered", () => {
    let div = document.createElement("div");
    let p = 
    {
        name: "123456789012345678901234567890",
        id: 20,
        description: "123456789012345678901234567890",
        image: "img"
    };
    let cmp = new ProductsComponent(div, [new Product(p)]);
    cmp.render();

    expect(div.querySelector(".card-title").textContent).toBe("12345678901234567890");
})