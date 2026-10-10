import { isLeapYear } from "./isLeapYear.js";

describe("Leap year checks", () =>
    test.each([[2000], [1984], [2024], [1400] ])("Checking year: '%s'", (year) => {
    expect(isLeapYear(year)).toBeTruthy()
} ),
    test.each([[2026], [3849], [2023], [1451] ])("Checking year: '%s'", (year) => {
    expect(isLeapYear(year)).toBeFalsy()
} )
)