import { convertToRub } from "./convert.js";
import { getRate } from "./currency.js";

jest.mock('./currency')

test('Currency test', async () => {
    getRate.mockResolvedValue(90)
    const conv = await convertToRub(2, "USD")
    expect(conv).toEqual(180)
    expect(getRate).toHaveBeenCalledWith("USD")
})