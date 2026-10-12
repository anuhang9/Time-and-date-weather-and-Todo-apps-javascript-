// console.log("hello")
// console.log(document.getElementsByClassName('a')[0].style)
// document.getElementsByClassName("a")[0].style.color = "red"
// document.querySelector('.a').style.color = 'red'
// console.log(document.querySelector('.a'))
let hourSlot = document.getElementById("hour");
let minuteSlot = document.getElementById("minute");
let secondSlot = document.getElementById("second");
let yearSlot = document.getElementById("year");
let monthSlot = document.getElementById("month");
let dayNumberSlot = document.getElementById("dayNumber");
let dayNameSlot = document.getElementById("dayName");
let timeLocationSlot = document.getElementById("timeLocation");

let nameOfDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thirsday",
  "Friday",
  "Saturday",
];
let nameOfMonth = [
  "January",
  "Feburary",
  "March",
  "April",
  "Monday",
  "June",
  "July",
  "August",
  "Semptember",
  "October",
  "November",
  "December",
];

let getTimeDateSetInterval = setInterval(() => {
  let time = new Date();

  hourSlot.innerText = time.getHours();
  minuteSlot.innerText = time.getMinutes();
  secondSlot.innerText = time.getSeconds();
  yearSlot.innerText = time.getFullYear();
  dayNumberSlot.innerText = time.getDate();

  switch (time.getMonth()) {
    case 0:
      monthSlot.innerText = nameOfMonth[0];
      break;
    case 1:
      monthSlot.innerText = nameOfMonth[1];
      break;
    case 2:
      monthSlot.innerText = nameOfMonth[2];
      break;
    case 3:
      monthSlot.innerText = nameOfMonth[3];
      break;
    case 4:
      monthSlot.innerText = nameOfMonth[4];
      break;
    case 5:
      monthSlot.innerText = nameOfMonth[5];
      break;
    case 6:
      monthSlot.innerText = nameOfMonth[6];
      break;
    case 7:
      monthSlot.innerText = nameOfMonth[7];
      break;
    case 8:
      monthSlot.innerText = nameOfMonth[8];
      break;
    case 9:
      monthSlot.innerText = nameOfMonth[9];
      break;
    case 10:
      monthSlot.innerText = nameOfMonth[10];
      break;
    case 11:
      monthSlot.innerText = nameOfMonth[11];
      break;
    default:
      monthSlot.innerText = "contact your devloper";
  }

  switch (time.getDay()) {
    case 0:
      dayNameSlot.innerText = nameOfDay[0];
      break;
    case 1:
      dayNameSlot.innerText = nameOfDay[2];
      break;
    case 2:
      dayNameSlot.innerText = nameOfDay[3];
      break;
    case 3:
      dayNameSlot.innerText = nameOfDay[4];
      break;
    case 4:
      dayNameSlot.innerText = nameOfDay[5];
      break;
    case 5:
      dayNameSlot.innerText = nameOfDay[6];
      break;
    case 6:
      dayNameSlot.innerText = nameOfDay[7];
      break;
    default:
      dayNameSlot.innerText = "Immidiatly contct to devloper.";
  }
}, 1000);
// clearInterval(getTimeDateSetInterval)

timeLocationSlot.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;

//fetch api

if (!navigator.geolocation) retrun;

// navigator.geolocation.getCurrentPosition(
// (position) => {
// console.log("Location success!");

// const lat = position.coords.latitude;
// const lon = position.coords.longitude;

// console.log("Latitude:", lat);
// console.log("Longitude:", lon);
// },
// (error) => {
// console.log("Location error:", error.code);
// console.log("Message:", error.message);
// },
// );
navigator.geolocation.getCurrentPosition(async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(
    `latitude: ${position.coords.latitude}, longtitude: ${position.coords.longitude}`,
  );
  const myApi = await fetch(
    `https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${c5f7ab354f01ab7b6a88cdd8f57bc4b6}`,
  );
  try {
    console.log(myApi);
  } catch (error) {
    console.log(error);
  }
});
// navigator.geolocation.getCurrentPosition((e)=>{
// console.l(e.coords)
// const lat = e.coords.latitude;
// const lon = e.coords.longitude;
// return e.coords
// retrun `${lat}&lon=${lon}`
// })

// async(()=>{
// consoloe.log(fetchData);
// })

// const fetchWeatherApi = async()=>{
// const fetch data = await fetch(https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key})
// }
