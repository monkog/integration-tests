import { Product } from "../../front-end/scripts/models/product";

test("Product has assigned properties", () => {
    let p = 
    {
        name: "name",
        id: 20,
        description: "desc",
        image: "img"
    };

    let product = new Product(p);
    expect(product.name).toBe(p.name);
    expect(product.id).toBe(p.id);
    expect(product.description).toBe(p.description);
    expect(product.image).toBe(p.image);
})

test("Product name and description trimmed", () => {
    let p = 
    {
        name: "123456789012345678901234567890",
        id: 20,
        description: "123456789012345678901234567890",
        image: "img"
    };

    let product = new Product(p);
    expect(product.name).toBe("12345678901234567890");
    expect(product.description).toBe("12345678901234567890");
})