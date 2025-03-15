import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(ev) {
  ev.preventDefault();

  const state = form.elements.state.value;
  const delay = parseInt(form.elements.delay.value, 10);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(() => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
}
