import { fetchUserById } from "./fetchUserById.js";

test('Fetching user by ID', () => {
    expect(fetchUserById(1)).resolves.toStrictEqual({id: 1, name: "Аня"})
})

test('Fetching by nonexistent ID', () => {
    expect(fetchUserById(699)).rejects.toThrow("Where's no ID")
})