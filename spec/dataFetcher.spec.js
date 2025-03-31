const dataFetcher = require('../src/dataFetcher');

describe("Data Fetcher", () => {
    it("should call the callback with fetched data", (done) => {
        function callback(data) {
            expect(data).toBe("Data fetched successfully");
            done(); // Notify Jasmine that the async test is complete
        }

        dataFetcher.fetchData(callback);
    });
});