//validate for card number
const cardNumberInput = document.getElementById("card-number");
const cardNumberError = document.getElementById("cardNumberError");

cardNumberInput.addEventListener("input", function () {
    const cardNumberValue = cardNumberInput.value.trim();
    const cardNumberRegex = /^[0-9]{16}$/; // Adjust the regex pattern as needed
    
    if (!cardNumberRegex.test(cardNumberValue)) {
        cardNumberError.textContent = "Please enter a valid 16-digit card number.";
    } else {
        cardNumberError.textContent = "";
    }
});
//validate for expiry-date
const expiryDateInput = document.getElementById("expiry-date");
const expiryDateError = document.getElementById("expiryDateError");

expiryDateInput.addEventListener("input", function () {
    const expiryDateValue = expiryDateInput.value.trim();
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    
    if (!expiryDateRegex.test(expiryDateValue)) {
        expiryDateError.textContent = "Please enter a valid expiry date in MM/YY format.";
    } else {
        expiryDateError.textContent = "";
    }
});
//validate for cvc
const cvcInput = document.getElementById("cvc");
const cvcError = document.getElementById("cvcError");

cvcInput.addEventListener("input", function () {
    const cvcValue = cvcInput.value.trim();
    const cvcRegex = /^[0-9]{3,4}$/; // 3 or 4 digits
    
    if (!cvcRegex.test(cvcValue)) {
        cvcError.textContent = "Please enter a valid 3 or 4-digit CVC/CVV number.";
    } else {
        cvcError.textContent = "";
    }
});



const nameOnCardInput = document.getElementById("name-on-card");

const continueButton = document.getElementById("continue");
continueButton.setAttribute("disabled", "disabled");

cardNumberInput.addEventListener("input", validateForm);
expiryDateInput.addEventListener("input", validateForm);
cvcInput.addEventListener("input", validateForm);
nameOnCardInput.addEventListener("input", validateForm);

function validateForm() {
    const cardNumberValue = cardNumberInput.value.trim();
    const expiryDateValue = expiryDateInput.value.trim();
    const cvcValue = cvcInput.value.trim();
    const nameOnCardValue = nameOnCardInput.value.trim();

    const isCardNumberValid = /^[0-9]{16}$/.test(cardNumberValue);
    const isExpiryDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDateValue);
    const isCVCValid = /^[0-9]{3,4}$/.test(cvcValue);
    const isNameOnCardValid = nameOnCardValue !== "";

    if (isCardNumberValid && isExpiryDateValid && isCVCValid && isNameOnCardValid) {
        continueButton.removeAttribute("disabled");
    } else {
        continueButton.setAttribute("disabled", "disabled");
    }
}
//disable links
const confirmationLink = document.getElementById("confirmationlink");
    
// Add click event listeners to disable each link separately


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
  
//name
const storeData = localStorage.getItem('name');
if (storeData){       
  const names = storeData;
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row1");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = names;

  cells[0].textContent = cell1Value;  

}
//mobile
const storeData1 = localStorage.getItem('phone');
if (storeData1){       
  const phones = storeData1;
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row5");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = phones;

  cells[0].textContent = cell1Value;  

}
//confirm email
const storeData2 = localStorage.getItem('email');
if (storeData2){       
  const emails = storeData2; 
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row6");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = emails;

  cells[0].textContent = cell1Value;  

}
//gender
const storeData3 = localStorage.getItem('gend');
if (storeData3){       
  const gends = storeData3;
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row7");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = gends;

  cells[0].textContent = cell1Value;  

}
//duration
const storeData4 = localStorage.getItem('ndura');
if (storeData4){       
  const nduras = storeData4;
  
  const table = document.getElementById("summaryTable");
  const targetRow = document.getElementById("row4");
  const cells = targetRow.getElementsByTagName("td");     

  const cell1Value = nduras;

  cells[0].textContent = cell1Value;  

}
//date
const storeData5 = localStorage.getItem('date');
if (storeData5){       
const dates = storeData5;  
const table = document.getElementById("summaryTable");
const targetRow = document.getElementById("row2");
const cells = targetRow.getElementsByTagName("td");     
const cell1Value = dates;

cells[0].textContent = cell1Value;  

}
//time
const storeData6 = localStorage.getItem('Time');
if (storeData6){       
const Times = storeData6;
const table = document.getElementById("summaryTable");
const targetRow = document.getElementById("row3");
const cells = targetRow.getElementsByTagName("td");     

const cell1Value = Times;

cells[0].textContent = cell1Value;  

}
//charges st
// ... (your existing code)

// Function to populate the ticket details and total payable in the summary table
function populateSummaryTable() {
    const ticketCounts = JSON.parse(localStorage.getItem('ticketCounts'));
    const ticketPrices = JSON.parse(localStorage.getItem('ticketPrices'));
    
    if (ticketCounts && ticketPrices) {
      const summaryTableBody = document.getElementById('ticketTableBody');
      summaryTableBody.innerHTML = '';
  
      let totalPayable = 0;
  
      for (let i = 0; i < ticketCounts.length; i++) {
        if (ticketCounts[i] > 0) {
          const row = document.createElement('tr');
          const labelCell = document.createElement('td');
          const priceCell = document.createElement('td');
  
          const ticketTypeName = getTicketTypeName(i);
          const ticketCount = ticketCounts[i];
          const ticketPrice = ticketCounts[i] * ticketPrices[i];
  
          labelCell.textContent = `${ticketCount} ${ticketTypeName}`;
          priceCell.textContent = `$${ticketPrice.toFixed(2)}`;
  
          row.appendChild(labelCell);
          row.appendChild(priceCell);
  
          summaryTableBody.appendChild(row);
  
          totalPayable += ticketPrice;
        }
      }
  
      const totalPayableCell = document.getElementById('totalPayable');
      totalPayableCell.textContent = `$${totalPayable.toFixed(2)}`;
    }
  }
  
  populateSummaryTable(); // Call the function to populate the summary table
  
  // ... (your existing code)
  
