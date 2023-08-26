const { TestScheduler } = require("jest");
const addition =require("../calc");

describe('Calculator', () =>{
    describe('Addition function', () =>{
        test('should return 42 for 20 + 22', () => {
            expect(addition(20,22)).toBe(42);
        })
        test('should return 12 for 6 + 6', () => {
            expect(addition(6,6)).toBe(12);
        })
        test('should return 0 for no parameters', () => {
            expect(addition()).toBe(0);
        })
        test('should return 5 for -12 + 17', () => {
            expect(addition(-12, 17)).toBe(5);
        })
        test('should return 4.6 for 3.1 + 1.5', () => {
            expect(addition(3.1, 1.5)).toBe(4.6);
        })
    })
    describe('Subtraction function', () =>{
        
    })
    describe('Multiplication function', () =>{
        
    })
    describe('Division function', () =>{
        
    })
})