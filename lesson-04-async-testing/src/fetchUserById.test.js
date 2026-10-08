import { fetchUserById } from "./fetchUserById.js";

// Задание 2: протестируйте успех (resolves.toEqual) и отклонение (rejects.toThrow).
// Для страховки от забытого await можно добавить expect.assertions(1).

test.todo("fetchUserById: возвращает пользователя по id (resolves.toEqual)");
test.todo("fetchUserById: несуществующий id → отклонение (rejects.toThrow)");

test('Fetching user by ID', () => {
    expect(fetchUserById(1)).resolves.toStrictEqual({id: 1, name: "Аня"})
})

test('Fetching by nonexistent ID', () => {
    expect(fetchUserById(699)).rejects.toThrow("Where's no ID")
})