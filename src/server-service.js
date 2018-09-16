import fetch from 'node-fetch';

class ServerService{
    async get() {
        let result = await fetch('http://localhost:3000/products');
        return result.json();
    }
}

export default new ServerService();