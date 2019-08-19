export function age(year) {
  const current = new Date();
  const bornYear = new Date(year)
  return current.getFullYear() - bornYear.getFullYear()
}