import ProductsService from './services/products-service';
import { ProductsComponent } from './components/products-component';
import { Product } from './models/product';

async function setup() {
    const $app = document.querySelector('#app');
    const products = await ProductsService.fetchList();
    const models = products.map(p => new Product(p));
    const c = new ProductsComponent($app, models);
    c.render();
}

try {
    setup();
} catch (err) {
    console.error(err);
}
