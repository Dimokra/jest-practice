import { fizzBuzz } from "./fizzBuzz.js";

    test.each([
        {num: 20, expectedFizzBuzz: 'Buzz'},
        {num: 60, expectedFizzBuzz: 'FizzBuzz'},
        {num: 9, expectedFizzBuzz: 'Fizz'},
        {num: 2, expectedFizzBuzz: "2"}
    ])("FizzBuzzing: '$num' to be $expectedFizzBuzz",
        ({num, expectedFizzBuzz}) => {
            expect(fizzBuzz(num)).toBe(expectedFizzBuzz)
        }
    )