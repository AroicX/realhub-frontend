export const toAbsoluteUrl = (pathname) =>
  process.env.PUBLIC_URL + "/svg/" + pathname;

export const formatDate = (d) => {
  const date = new Date(d);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export function isEmpty(val) {
  return val.trim().length === 0;
}
