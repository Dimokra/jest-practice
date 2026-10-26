// Задание 2 к Лекции 8. Спецификация — в README.md этой папки.
export function saveAll(storage, items) {
  items.map((item) => {
    storage.save(item)
  })
  return items.lenght
}
