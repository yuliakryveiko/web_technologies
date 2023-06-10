fetch('http://127.0.0.1:8080/user/self', {
  method: 'GET',
  headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
})
  .then(response => {
    if (response.status == 401) {

      alert("Your session has expired")
      window.location.href = 'http://127.0.0.1:5500/layout/login.html';
    }
    return response.json()
  })
  .then(data => {
    // Handle the response data
    console.log(data.response);

    document.querySelector('.full-name').textContent = data.response.firstName + " " + data.response.lastName;
    document.querySelector('.username').textContent = data.response.username;
    document.querySelector('.email').textContent = data.response.email;
    document.querySelector('.amount').textContent = data.response.wallet + "$";

    localStorage.setItem('userId', data.response.id)
  })
  .catch(error => {
    console.error('Error:', error)
  }
  );

const logoutButton = document.querySelector('#logout-button');

logoutButton.addEventListener('click', () => {
  fetch('http://127.0.0.1:8080/user/logout', {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` }
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
      window.location.href = 'login.html';
      alert("You are successfully logged out!");
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
