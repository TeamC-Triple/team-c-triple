// date.js

export const getStringDate = (d) => {
    let offset = d.getTimezoneOffset() * 60000;
    let dateOffset = new Date(d.getTime() - offset);
    return dateOffset.toISOString().slice(0,10);
}