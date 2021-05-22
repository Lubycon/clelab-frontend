export function getCurrentTime() {
  const date = new Date()
  date.setHours(date.getHours() + date.getTimezoneOffset() / 60 + 9)
  let hour = date.getHours()

  const min = date.getMinutes().toString().padStart(2, '0')
  const hour12 = hour >= 12 ? 'PM' : 'AM'

  hour = hour % 12
  hour = hour ? hour : 12

  return [hour.toString(), min, hour12] as [string, string, string]
}
