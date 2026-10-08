import { divideAsync } from "./divideAsync.js";

test('Usual dividing', async () => {
    await expect(divideAsync(8, 4)).resolves.toEqual(2)
})

test('Divividing by zero', async () => {
    await expect(divideAsync(8, 0)).rejects.toThrow("Wrong!")
})

