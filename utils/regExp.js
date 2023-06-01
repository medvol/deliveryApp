export const phoneRegexp = /^\+380\d{9}$/;
export const addressRegexp =
  /^([A-Za-zА-Яа-яІіЇїЄєҐґ\s]+),\s([A-Za-z\s]+),\s(\d+)$/;
export const userRegexp =
  /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
export const emailRegexp =
  /^(?=.{10,63}$)([A-Za-z0-9._-]{2,}@[A-Za-z0-9._-]{2,})$/;
