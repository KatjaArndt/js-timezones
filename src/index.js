/*Challenge 2*/
let dateHonolulu = document.querySelector("#current-date");
let formattedDate = moment
  .tz("Pacific/Honolulu")
  .format("dddd, D MMMM YYYY, h:mm A");
dateHonolulu.innerHTML = `It is ${formattedDate} in Honolulu, Hawai`;

/*Challenge 3*/
let dateParis = document.querySelector("#future-date");
let formattedDateParis = moment
  .tz("Pacific/Honolulu")
  .add(10, "years")
  .format("dddd, D MMMM, YYYY, h:mm A");
dateParis.innerHTML = `10 years from now, it will be ${formattedDateParis} in Paris, France`;

/*Challenge 4*/

let localTimezone = document.querySelector("#local-time-zone");
localTimezone.innerHTML = moment.tz.guess();
