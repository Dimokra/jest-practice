export function getUserName(repo, id) {
  const user = repo.findById(id)
  if(user) return user.name
  if(user === undefined) return "Anonimus"
}
