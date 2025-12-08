// app/helpers/utils/getCurrentWeek.js
export const getCurrentWeek = () => {
  const tz = 'Europe/Bucharest';
  const now = new Date();

  // 1) Extragem "azi" în RO ca părți (YYYY-MM-DD), fără să construim Date din string localizat
  const ymd = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now); // ex: "2025-11-13"

  const [y, m, d] = ymd.split('-').map(Number);

  // Helper: construim o dată "neutră" la 12:00 UTC ca să nu alunece de ziua corectă când formatăm în alt tz
  const makeUTCNoon = (Y, M, D) => new Date(Date.UTC(Y, M - 1, D, 12, 0, 0));

  const today = makeUTCNoon(y, m, d);

  // 2) Ziua săptămânii în RO-tz
  const weekdayShort = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    weekday: 'short',
  }).format(today); // Mon..Sun în RO-tz

  const toMonIdx = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
  const dow = toMonIdx[weekdayShort] || 1; // luni=1

  // 3) Luni–Duminică pentru săptămâna curentă, calcul în UTC să evităm DST
  const startOfWeek = new Date(today);
  startOfWeek.setUTCDate(startOfWeek.getUTCDate() - (dow - 1));

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setUTCDate(endOfWeek.getUTCDate() + 6);

  // 4) Formatări în RO, garantat în tz corect
  const dayFmt = new Intl.DateTimeFormat('ro-RO', {
    timeZone: tz,
    day: 'numeric',
    month: 'long',
  });

  const weekString = `${dayFmt.format(startOfWeek)} - ${dayFmt.format(endOfWeek)}`;

  const currentDayName = new Intl.DateTimeFormat('ro-RO', {
    timeZone: tz,
    weekday: 'long',
  }).format(today);

  const currentDayAsDate = new Intl.DateTimeFormat('ro-RO', {
    timeZone: tz,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(today);

  return { currentDayName, currentDayAsDate, weekString };
};
