// Задание 2 к Лекции 4. Спецификация — в README.md этой папки.

// «База» пользователей — данные уже готовы, менять не нужно.
const USERS = [
  { id: 1, name: "Аня" },
  { id: 2, name: "Борис" },
];

export async function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    if (!id || !(id in USERS)) {
      reject(new Error("Where's no ID"))
    } else {
      resolve(USERS.find((item) => item.id))
    }
  })
}
