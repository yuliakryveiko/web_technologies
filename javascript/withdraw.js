fetch('http://127.0.0.1:8080/user/self', {
  method: 'GET',
  headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
})
  .then(response => {
  if(response.status == 401){

    alert("Your session has expired")
    window.location.href = 'http://127.0.0.1:5500/web-technologies-1/layout/login.html';
  }

    return response.json()
  })
  .then(data => {
    // Handle the response 
    document.querySelector('.balance').textContent = data.response.wallet + "$";
    console.log(data);

  })
  .catch(error => {

  console.error('Error:', error)
  }
  );

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#withdraw-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      amount: document.querySelector('input[name="amount"]').value
    };

    fetch('http://127.0.0.1:8080/user/withdraw', {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
    console.log(response);
    return response.json()
  })
    .then(data => {
      // Handle the response data
      console.log(data);
      alert(data.response);
      window.location.href = 'http://127.0.0.1:5500/web-technologies-1/layout/user.html';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
