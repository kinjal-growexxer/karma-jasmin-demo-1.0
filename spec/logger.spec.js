const logger = require('../src/logger');

describe("Logger", () => {
    it("should call console.log with the correct message", () => {
        spyOn(console, 'log'); // Spy on the console.log function
        logger.logMessage("Test message");
        expect(console.log).toHaveBeenCalledWith("Test message");
    });
});
