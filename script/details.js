
const nameInput = document.getElementById("name");
const errorText = document.getElementById("ErrorText");

nameInput.addEventListener("input", function () {
    const names = nameInput.value.trim().split(" ");
    
    if (names.length !== 2) {
        errorText.textContent = "Please enter full name";
    } else {
        errorText.textContent = "";
    }
});
const emailInput = document.getElementById("email");
    const ErrorText = document.getElementById("errorText");

    emailInput.addEventListener("input", function () {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            ErrorText.textContent = "Please enter a valid email address.";
        } else {
            ErrorText.textContent = "";
        }
    });

    const email = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirm-email");
    const emailErrorText = document.getElementById("errorText");
    const confirmEmailErrorText = document.getElementById("confirmEmailErrorText");

    email.addEventListener("input", validateEmails);
    confirmEmailInput.addEventListener("input", validateEmails);

    function validateEmails() {
        const emailValue = email.value.trim();
        const confirmEmailValue = confirmEmailInput.value.trim();

        if (emailValue !== confirmEmailValue) {
           
            confirmEmailErrorText.textContent = "Emails do not match.";
        } else {
          
            confirmEmailErrorText.textContent = "";
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        const nameInput = document.getElementById("name");
        const displayName = document.getElementById("displayName");
    
        nameInput.addEventListener("input", function () {
            displayName.textContent = nameInput.value.trim();
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const mobileInput = document.getElementById("mobilenum");
        const displayMobile = document.getElementById("displayMobile");
    
        mobileInput.addEventListener("input", function () {
            displayMobile.textContent =  + mobileInput.value.trim();
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const genderInput = document.getElementById("gender");
        const displayGender = document.getElementById("displayGender");
    
        genderInput.addEventListener("change", function () {
            displayGender.textContent = genderInput.value;
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        // Your existing code
        
        const confirmEmailInput = document.getElementById("confirm-email");
        const displayEmail = document.getElementById("displayEmail");
    
        confirmEmailInput.addEventListener("input", function () {
            displayEmail.textContent = confirmEmailInput.value;
        });
    });
    
   
    
    const genderInput = document.getElementById("gender");
    const continueButton = document.getElementById("continue");
    
    continueButton.setAttribute("disabled", "disabled"); // Disable the button initially
    
    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    confirmEmailInput.addEventListener("input", validateForm);
    genderInput.addEventListener("change", validateForm); // Changed to 'change' event
    
    function validateForm() {
        const names = nameInput.value.trim().split(" ");
        const emailValue = emailInput.value.trim();
        const confirmEmailValue = confirmEmailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const genderValue = genderInput.value;
    
        if (names.length !== 2) {
            errorText.textContent = "Please enter full name";
        } else {
            errorText.textContent = "";
        }
    
        if (!emailRegex.test(emailValue)) {
            emailErrorText.textContent = "Please enter a valid email address.";
        } else {
            emailErrorText.textContent = "";
        }
    
        if (emailValue !== confirmEmailValue) {
            confirmEmailErrorText.textContent = "Emails do not match.";
        } else {
            confirmEmailErrorText.textContent = "";
        }
    
        const isNameValid = names.length === 2;
        const isEmailValid = emailRegex.test(emailValue) && emailValue === confirmEmailValue;
        const isGenderValid = genderValue !== " "; // Validate gender
        
        if (isNameValid && isEmailValid && isGenderValid) {
            continueButton.removeAttribute("disabled");
        } else {
            continueButton.setAttribute("disabled", "disabled");
        }
    }
    // disable links
    const paymentLink = document.getElementById("paymentlink");
const confirmationLink = document.getElementById("confirmationlink");

// Add click event listeners to disable each link separately


paymentLink.addEventListener("click", function(event) {
  event.preventDefault();
});

confirmationLink.addEventListener("click", function(event) {
  event.preventDefault();
});
//local storage
function UpdateSummary(){
    const disdate = document.getElementById("displaydate");
   
    const nhv = document.getElementById("displayDuration");
    const phv = document.getElementById("ticketTableBody");
    const slad = document.getElementById('totalPayable');
    const slch = document.getElementById('SumSlCh');
    const fad = document.getElementById('SumFAd');
    const fch = document.getElementById('SumFCh');
    const inf = document.getElementById('SumInfant');
    //const total = document.getElementById('total') 
  
    disdate.innerText = localStorage.getItem('date');
    tim.innerText = localStorage.getItem('Time');
    nhv.innerText = localStorage.getItem('ndura');
    phv.innerText = localStorage.getItem('pdura');
    slad.innerText = localStorage.getItem('slAD');
    slch.innerText = localStorage.getItem('SlCH');
    fad.innerText = localStorage.getItem('FAd');
    fch.innerText = localStorage.getItem('FCh');
    inf.innerText = localStorage.getItem('Inf');
    //total.innerText = localStorage.getItem('total'); 
  
  }
  //window.addEventListener("load", UpdateSummary);
  
  //add date
  const btncont = document.getElementById("continue");
  function SaveData(){
    const tim = document.getElementById("displayTimeslots");
    const name = document.getElementById("displayName");
    const phone = document.getElementById("displayMobile");
    const email = document.getElementById("displayEmail");
    const gend = document.getElementById("displayGender");
  
    localStorage.setItem('name', name.innerText);
    localStorage.setItem('phone', phone.innerText);
    localStorage.setItem('email', email.innerText);
    localStorage.setItem('gend', gend.innerText);
    localStorage.setItem('displayTimeSlots', tim.innerText);
  }
  btncont.addEventListener('click', SaveData);
  btncont.addEventListener('click', UpdateSummary);

  //ls
  /* const data = [
    {cust_name : 'name', mobile : '077'},
    {cust_name : 'name1', mobile : '071'},
  ];
  localStorage.setItem('items', JSON.stringify(data));
 */
//duration
  const storeData1 = localStorage.getItem('ndura');
  if (storeData1){       
    const nduras = storeData1;
    
    const table = document.getElementById("summaryTable");
    const targetRow = document.getElementById("row4");
    const cells = targetRow.getElementsByTagName("td");     

    const cell1Value = nduras;

    cells[0].textContent = cell1Value;  

  }
//date
const storeData2 = localStorage.getItem('date');
if (storeData2){       
  const dates = storeData2;  
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row2");
  const cells = targetRow.getElementsByTagName("td");     
  const cell1Value = dates;

  cells[0].textContent = cell1Value;  

}
//time
const storeData3 = localStorage.getItem('Time');
if (storeData3){       
  const Times = storeData3;
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row3");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = Times;

  cells[0].textContent = cell1Value;  

}
//SL Adults
 const storeData4 = localStorage.getItem('slAD');
if (storeData4){       
  const slADs = storeData4;
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row9");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = slADs;

  cells[1].textContent = cell1Value;  

}
//SL Child
/* const storeData5 = localStorage.getItem('pdura');
if (storeData5){       
  const SlCHs = storeData5;
  alert(SlCHs);  
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row10");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = SlCHs;

  cells[1].textContent = cell1Value;

}   */
/* function collectTableData() {
    const table = document.getElementById('summaryTable');
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = {
            name: cells[0].textContent,
            age: cells[1].textContent
        };
        data.push(rowData);
    });

    return data;
        } */
//ls
// Retrieve selected tickets data from local storage
const selectedTickets = JSON.parse(localStorage.getItem("selectedTickets"));

// Assuming you have a table element with id "ticketTableBody" to update
const ticketTableBody = document.getElementById("ticketTableBody");

// Clear the existing table content if any
ticketTableBody.innerHTML = "";

// Iterate through selected tickets and update the table
selectedTickets.forEach(ticket => {
  const row = ticketTableBody.insertRow();
  const cellType = row.insertCell(0);
  const cellPrice = row.insertCell(1);
  const cellQuantity = row.insertCell(2);
  const cellTotal = row.insertCell(2);

  cellType.textContent = ticket.type;
  cellPrice.textContent = "$" + ticket.price.toFixed(1);
  cellQuantity.textContent = ticket.quantity;
  const total = ticket.quantity * ticket.price;
  cellTotal.textContent = "$" + total.toFixed(1);
});

// Calculate and display the total payable
const totalPayable = selectedTickets.reduce((total, ticket) => {
  return total + (ticket.quantity * ticket.price);
}, 0);

const totalPayableCell = document.getElementById("totalPayable");
totalPayableCell.textContent = "$" + totalPayable.toFixed(2);

