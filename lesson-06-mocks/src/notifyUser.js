export function notifyUser(mailer, user, text) {
  if (!user.email) throw new Error("User doesn't have an email")
  else mailer.send(user.email, text)
  return true   
}
