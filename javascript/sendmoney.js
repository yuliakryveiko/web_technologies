document.addEventListener('DOMContentLoaded', () => {

    const sendForm = document.querySelector('#send-form');
  
    sendForm.addEventListener('submit', (event) => {
  
      event.preventDefault();
  
      // Create the transaction object
      const transaction = {
        sentByUser: localStorage.getItem('userId'),
        sentToUser: document.querySelector('input[name="sentToUser"]').value,
        value: document.querySelector('input[name=amount]').value
      };
  
      fetch('http://127.0.0.1:8080/transaction/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        },
        body: JSON.stringify(transaction)
      })
      .then(response => {
        if(response.status == 401){

          alert("Your session has expired")
          window.location.href = 'http://127.0.0.1:5500/web-technologies-1/layout/login.html';
        }
      
        return response.json()
    })
      .then(data => {
        // Handle the response data
        console.log(data);
        alert('Transaction successful!');
        window.location.href = 'http://127.0.0.1:5500/web-technologies-1/layout/transactions.html';

      })
      .catch(error => console.error('Error:', error));
    });
  });
  