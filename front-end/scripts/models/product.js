export class Product {
    constructor(object) {
        this.name = object.name.slice(0, 20);
        this.id = object.id;
        this.description = object.description.slice(0, 20);
        this.image = object.image;
    }
}