export function getCurrentTime() {
  const current = new Date();
  return current.getUTCHours();
}
