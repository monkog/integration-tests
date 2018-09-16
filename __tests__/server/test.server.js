import serverService from "../../src/server-service"

test('expects service to be a promise', () => {
    let get = serverService.get();
    expect(typeof get['then']).toBe('function');
});

test('expects service to be present', () => {
    return serverService.get().then(response => {
        expect(response).not.toBeNull();
    });
});