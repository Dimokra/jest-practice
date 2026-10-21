import { notifyUser } from "./notifyUser.js";

// Задание 1: изолируйте зависимость mailer через jest.fn() и проверьте,
// КАК её вызвали. Стройте тест по паттерну AAA (Arrange — Act — Assert).

test.todo("notifyUser: вызывает mailer.send с нужными аргументами (AAA)");
test.todo("notifyUser: без email — ошибка, mailer.send не вызывается");

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