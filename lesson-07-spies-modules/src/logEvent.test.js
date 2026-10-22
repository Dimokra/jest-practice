import { logEvent } from "./logEvent.js";

test('Spy', () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {})
    const log = logEvent("click")
    expect(spy).toHaveBeenCalledWith("Event: click")
    spy.mockRestore()
})