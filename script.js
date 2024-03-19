const file = 'assets/allotments-and-community-gardens-in-ireland-od-upload.csv';
const app = document.querySelector('#app');
const table = document.createElement('table');
app.appendChild(table);
table.innerHTML = `
  <thead>
    <tr>
      <th>County</th>
      <th>Provides Allotments</th>
      <th>Number (31/12/18)</th>
      <th>For Public Use</th>
      <th>Public Use Number (31/12/18)</th>
    </tr>
  </thead>
  <tbody></tbody>
`;

fetch(file)
  .then(response => response.text())
  .then(text => {
    const table = document.querySelector('table');
    // Set up the number of rows needed in the table.
    const numberOfRowsInTable = 31;
    for (let index = 0; index < numberOfRowsInTable; index++) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `;
      table.querySelector('tbody').appendChild(tr);
    }

    const rows = text.split('\n');
    const counties = rows.slice(5, 36);
    const numberOfAllotmentsProvided = rows.slice(40, 71);
    const forPublicUse = rows.slice(78, 109);
    const publicUseNumber = rows.slice(113, 144);
    const countyCells = document.querySelectorAll('tbody > tr > td:nth-child(1)');
    const providesAllotments = document.querySelectorAll('tbody > tr > td:nth-child(2)');
    const numberCells = document.querySelectorAll('tbody > tr > td:nth-child(3)');
    const publicUseCells = document.querySelectorAll('tbody > tr > td:nth-child(4)');
    const publicUseNumberCells = document.querySelectorAll('tbody > tr > td:nth-child(5)');

    countyCells.forEach((cell, index) => {
      cell.textContent = counties[index].split(',')[0];
    });
    providesAllotments.forEach((cell, index) => {
      cell.textContent = counties[index].split(',')[1];
    });
    numberCells.forEach((cell, index) => {
      cell.textContent = numberOfAllotmentsProvided[index].split(',')[1];
    });
    publicUseCells.forEach((cell, index) => {
      cell.textContent = forPublicUse[index].split(',')[1];
    });
    publicUseNumberCells.forEach((cell, index) => {
      cell.textContent = publicUseNumber[index].split(',')[1];
    });

  });