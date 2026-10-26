import { saveAll } from "./saveAll.js";

let save = jest.fn()
let storage = {save}

test("SaveAll test", () => {
    saveAll(storage, ["Хлеб"])
    expect(save).toHaveBeenCalledTimes(1)
})


test("SaveAll test", () => {
    saveAll(storage, ["Хлеб", "Банан"])
    expect(save).toHaveBeenCalledTimes(2)
})

afterEach(() => {
save.mockClear(); 
});