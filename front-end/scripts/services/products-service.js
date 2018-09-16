class ServerService{
    async get() {
        var d = new Date();
        if(!this.cacheTime || d.getTime() - this.cacheTime >= 5000 * 60){
            this.cachedResult = await this.fetch('http://localhost:3000/products');
            this.cacheTime = d.getTime();
        }

        return Promise.resolve(this.cachedResult.json());
    }

    setFetcher(fetcher) {
        this.fetch = fetcher;
        return this;
    }
}

const service = new ServerService();

export default (fetch) => service.setFetcher(fetch);