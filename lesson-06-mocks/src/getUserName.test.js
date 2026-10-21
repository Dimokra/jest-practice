import { getUserName } from "./getUserName.js";

test("User found", () => {
    const storage = {findById: jest.fn().mockReturnValue({id: 1, name: "Аня"})}
    const result = getUserName(storage, 1)
    expect(result).toBe("Аня")
    expect(storage.findById).toHaveBeenCalledWith(1)
})

test("User not found", () => {
    const storage = {findById: jest.fn().mockReturnValue(undefined)}
    const result = getUserName(storage, 1)
    expect(result).toBe("Anonimus")
    expect(storage.findById).toHaveBeenCalledWith(1)
})