const scriptURL = 'https://script.google.com/macros/s/AKfycbydUUhFBZrk2dWdbNcp0wcaNb31cdyTBPWssBohAtLUwDNse9o/exec'
const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
             
