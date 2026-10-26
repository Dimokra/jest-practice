// Задание 1 к Лекции 8. Спецификация — в README.md этой папки.
export function createCounter() {
  let value = 0
  return {
    value,
    increment() {
      value += 1
      this.value = value
      return value
    }
  }
}
