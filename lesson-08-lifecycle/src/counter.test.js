import { createCounter } from "./counter.js";

let counter

beforeEach(() => {
    counter = createCounter()    
    }
)

test("First test", () => {
    expect(counter.value).toBe(0)
})

test("Second test", () => {
    counter.increment()
    expect(counter.value).toBe(1)
})

test("Third test", () => {
    counter.increment()
    counter.increment()
    expect(counter.value).toBe(2)
})