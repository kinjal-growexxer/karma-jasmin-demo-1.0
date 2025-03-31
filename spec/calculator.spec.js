import { add, subtract } from '../src/calculator';

describe("Calculator Functions", () => {
    it("should add two numbers correctly", () => {
        expect(add(5, 3)).toBe(8);
    });

    it("should subtract two numbers correctly", () => {
        expect(subtract(10, 4)).toBe(6);
    });

    it("should return a negative result for subtraction when the first number is smaller", () => {
        expect(subtract(3, 10)).toBe(-7);
    });
});
