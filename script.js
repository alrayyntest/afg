
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFUmjESihoiSv4EizV8BNmbq4JO-9Gr6vHYuYCuynojkypw9_Np65SfieC0YhjeFNn9A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


