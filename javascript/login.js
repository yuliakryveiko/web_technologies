document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      username: document.querySelector('input[name="username"]').value,
      password: document.querySelector('input[name="password"]').value,
    }; 
    fetch('http://127.0.0.1:8080/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(response.status!=200){
        console.log(response)
        alert('Please try again');
        return;
      }
      console.log(response);
      window.location.href = 'http://127.0.0.1:5500/web-technologies-1/layout/user.html';
      return response.json()
    })
    .then(data => {
      // Save the JWT token to local storage
      console.log(data.access_token);
      localStorage.setItem('jwtToken', data.access_token);
      
    })
    .catch(error => console.error('Error:', error));
  });
});
