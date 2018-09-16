import ps from '../front-end/scripts/services/products-service';

test('is exist', () => {
    expect(typeof ps).toBe('object');
});

test('fetching', async () => {
    const products = await ps.fetchList();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
});
