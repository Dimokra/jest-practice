// Задание 1 к Лекции 6. Спецификация — в README.md этой папки.
export function notifyUser(mailer, user, text) {
  if (!user.email) throw new Error("User doesn't have an email")
  else mailer.send(user.email, text)
  return true   
}
