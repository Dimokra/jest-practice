import { notifyUser } from "./notifyUser.js";

test("NotifyUser", () => {
    const send = jest.fn()
    const mailer = { send }
    notifyUser(mailer, {email: "s@m.t"}, "My message")
    expect(send).toHaveBeenCalledTimes(1)
    expect(send).toHaveBeenCalledWith("s@m.t", 'My message')
})

test("NotifyUser without email", () => {
    const send = jest.fn()
    const mailer = { send }
    expect(() => notifyUser(mailer, {email: undefined}, "My message")).toThrow("User doesn't have an email")
    expect(send).not.toHaveBeenCalled()  
})