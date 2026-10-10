import { getDiscount } from "./getDiscount.js";

test.each([
    {total: 999, expectedDiscount: 0},
    {total: 1000, expectedDiscount: 5},
    {total: 2000, expectedDiscount: 10},
    {total: 3000, expectedDiscount: 10},
    {total: 5000, expectedDiscount: 20}
])('Testing different discounts', ({total, expectedDiscount}) => {
    expect(getDiscount(total)).toBe(expectedDiscount)
})