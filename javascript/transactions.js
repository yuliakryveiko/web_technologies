document.addEventListener('DOMContentLoaded', () => {

const typeFilter = document.querySelector('#type-filter');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
  const selectedValue = typeFilter.value;

  // Fetch transactions based on the selected filter
  fetch(`http://127.0.0.1:8080/transaction/${selectedValue}/self`, {
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
    // Handle the response data
    console.log(data);

    const tbody = document.querySelector('#tbody');
    tbody.innerHTML = '';

    data.response.forEach(transaction => {

      const tr = document.createElement('tr');
      const senderTd = document.createElement('td');
      const receiverTd = document.createElement('td');
      const valueTd = document.createElement('td');
      const dateTd = document.createElement('td');

      console.log(receiverTd)

      var datetime = new Date(transaction.datePerformed);
      var formattedDate = datetime.toLocaleString();

      // Assign the formatted date to the textContent of dateTd element
      dateTd.textContent = formattedDate;

      senderTd.textContent = "Me";
      receiverTd.textContent = transaction.sentToUser;
      valueTd.textContent = transaction.value + "$";
      dateTd.textContent = formattedDate;

      tr.appendChild(senderTd);
      tr.appendChild(receiverTd);
      tr.appendChild(valueTd);
      tr.appendChild(dateTd);
      
      tbody.appendChild(tr);
    });
  })
  .catch(error => console.error('Error:', error));
});
})