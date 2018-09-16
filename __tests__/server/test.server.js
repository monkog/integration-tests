import fetch from './../../fixtures/server-fixture';

import serviceInstance from "../../front-end/scripts/services/products-service";
const serverService = serviceInstance(fetch);

test('expects service to be a promise', () => {
    let get = serverService.get();
    expect(typeof get['then']).toBe('function');
});

test('expects service to be present', async () => {
    let result = await serverService.get();
    expect(result).not.toBeNull();
});

test('uses cache when requests called within small timeout', async () => {
    serverService.cacheTime = new Date().getTime();
    let cachedObject = "cached object";
    let cache = { json() { return cachedObject } };
    serverService.cachedResult = cache;
    let result = await serverService.get();
    expect(result).toBe(cachedObject);
});

test('requests called within long timeout does not return cached object', async () => {
    serverService.cacheTime = new Date().getTime() - 6000 * 60;
    let cachedObject = "cached object";
    let cache = { json() { return cachedObject } };
    serverService.cachedResult = cache;
    let result = await serverService.get();
    expect(result).not.toBe(cachedObject);
});

test('updates cache when requests called within long timeout', async () => {
    serverService.cacheTime = new Date().getTime() - 6000 * 60;
    let cachedObject = "cached object";
    let cache = { json() { return cachedObject } };
    serverService.cachedResult = cache;
    let result = await serverService.get();
    expect(result).not.toBe(cachedObject);
});