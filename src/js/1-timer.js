import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import { convertMs } from './convert-ms';

const startBtn = document.querySelector('[data-start]');
const inputData = document.getElementById('datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let userSelectedDate;

flatpickr(inputData, options);

startBtn.addEventListener('click', () => {
  console.log('start');
});

function addLeadingZero(value) {}

// const interval = setInterval(() => {
//   console.log(Date.now());
// });

document.addEventListener('click', () => {
  clearInterval(interval);
});

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const date = new Date('2025-12-12');

console.log(date.getTime());
console.dir(date);

const newDate = {
  name: date,
};

console.log(newDate);
