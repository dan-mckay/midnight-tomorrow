// This module returns the unix timestamp at midnight tomorrow

module.exports = function(date) {
  return new Date(
    new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,0,0).getTime() + 60 * 60 * 24 * 1000);
}
