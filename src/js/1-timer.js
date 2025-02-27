import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import { convertMs } from './convert-ms';
import { addLeadingZero } from './add-zero';

const startBtn = document.querySelector('[data-start]');
const inputData = document.getElementById('datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let userSelectedDate;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= Date.now()) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', onClickButton);
    }
  },
};

const flatpickrObj = flatpickr(inputData, options);

function onClickButton() {
  setInterval(() => {
    const userSelectedDate = flatpickrObj.selectedDates[0].getTime();
    const { days, hours, minutes, seconds } = convertMs(
      userSelectedDate - Date.now()
    );

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);

  startBtn.disabled = true;
}

