// Задание 1 к Лекции 4. Спецификация — в README.md этой папки.
export async function divideAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a <= 0 || null || undefined || b <= 0 || null || undefined) {
        reject(new Error('Wrong!'))
      } else {
        resolve(a / b)
      }
    }, 50);
  })
}
