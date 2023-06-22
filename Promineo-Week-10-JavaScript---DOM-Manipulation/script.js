const form = document.querySelector('form');
const tableBody = document.querySelector('table tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // get the input values
  const deliveryPlace = document.querySelector('#delivery_Place').value;
  const dateTime = document.querySelector('.date_Time').value;
  const price = document.querySelector('.price').value;
  const status = document.querySelector('.status').value;

  // determine the Bootstrap text color class based on the status value
let statusClass;
switch (status) {
  case 'Packing':
    statusClass = 'text-warning';
    break;
  case 'Registered':
    statusClass = 'text-info';
    break;
  case 'Sent':
    statusClass = 'text-success';
    break;
  default:
    statusClass = 'text-danger';
}

  // create a new table row with the input values
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${deliveryPlace}</td>
    <td>${dateTime}</td>
    <td>${price}</td>
    <td class="${statusClass}">${status}</td>
  `;

  // append the new row to the table body
  tableBody.appendChild(newRow);

  // reset the form
  form.reset();
});
