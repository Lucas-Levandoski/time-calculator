export function SecondsToDays(fromSeconds: number) {
  let toDays = fromSeconds;

  const days = Math.floor(toDays / 86400);
  toDays -= days * 86400;
  const hours = Math.floor(toDays / 3600);
  toDays -= hours * 3600;
  const minutes = Math.floor(toDays / 60);
  toDays -= minutes * 60;
  const seconds = toDays;
  return `${days}d ${hours}h ${minutes}m ${seconds}s `;
}

export function SecondsToHours(fromSeconds: number) {
  let toHours = fromSeconds;
  const hours = Math.floor(toHours / 3600);
  toHours -= hours * 3600;
  const minutes = Math.floor(toHours / 60);
  toHours -= minutes * 60;
  const seconds = toHours;
  return `${hours}h ${minutes}m ${seconds}s `;
}

export function SecondsToMinutes(fromSeconds: number) {
  let toMinutes = fromSeconds;
  const minutes = Math.floor(toMinutes / 60);
  toMinutes -= minutes * 60;
  const seconds = toMinutes;
  return `${minutes}m ${seconds}s `;
}
