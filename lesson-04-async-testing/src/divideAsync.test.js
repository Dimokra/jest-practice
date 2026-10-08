import { divideAsync } from "./divideAsync.js";

// Задание 1: протестируйте асинхронную функцию через async/await и resolves/rejects.
// Не забудьте await перед expect(...).resolves / .rejects!

test('Usual dividing', async () => {
    await expect(divideAsync(8, 4)).resolves.toEqual(2)
})

test('Divividing by zero', async () => {
    await expect(divideAsync(8, 0)).rejects.toThrow("Wrong!")
})

