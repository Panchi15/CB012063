
 
//   const time = document.getElementById('peakhours');
//   const sumtime = document.getElementById('summaryTime');

//   function calculateSummaryDuration() {
//     const timeSelect = document.getElementById("peakhours");
//     const selectedOptions = Array.from(timeSelect.selectedOptions);
//     if (selectedOptions.length === 0) {
//         document.getElementById("summaryTime").textContent = "No time slots selected";
//         return;
//       }
    
//       const startTime = selectedOptions[0].value.split(" to ")[0];
//       const endTime = selectedOptions[selectedOptions.length - 1].value.split(" to ")[1];
//       document.getElementById("summaryTime").textContent = startTime + " to " + endTime;
//     }
// Get the select elements

// the duration part in summary table in tickets page*

/* const peakHoursSelect = document.getElementById('peakhours');
const timeslotsSelect = document.getElementById('timeslots');

// Get the element to display the selected timeslots
const displayTimeslotsElement = document.getElementById('displayTimeslots');
const displayDurationElement = document.getElementById('displayDuration');
// Add event listeners to both select elements
peakHoursSelect.addEventListener('change', updateDisplay);
timeslotsSelect.addEventListener('change', updateDisplay);

// Function to update the display with selected timeslots
function updateDisplay() {
    const selectedPeakHours = Array.from(peakHoursSelect.selectedOptions, option => option.value);
    const selectedTimeslots = Array.from(timeslotsSelect.selectedOptions, option => option.value);
   // const selectedDuration = Array.from(peakHoursSelect.selectedOptions, option => option.value);
    //const selectedTimeslots = Array.from(timeslotsSelect.selectedOptions, option 
    
    const selectedTimeslotsText = selectedPeakHours.concat(selectedTimeslots).join(', ');
    displayTimeslotsElement.textContent = selectedTimeslotsText;

    
    const peakHoursSelect1 = document.getElementById('peakhours');
    const timeslotsSelect1 = document.getElementById('timeslots');
    peaktimeDuration = 0;
    offpeaktimeDuration = 0;
    if(peakHoursSelect1.value!=0){
        peaktimeDuration = 1;
    }
    if(timeslotsSelect1.value!=0){
        offpeaktimeDuration = 1;
    } */
    // const selectedDurationText = peaktimeDuration + offpeaktimeDuration;
    // displayDurationElement.textContent = selectedDurationText+ "hours";

   /*  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function getSelectedCheckboxes() {
  const selectedCheckboxes = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  //alert("Selected checkboxes:", selectedCheckboxes);
  alert("test");
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', getSelectedCheckboxes);
});
} */

// Select all the number elements
const numElements = document.querySelectorAll('.num1, .num2, .num3, .num4, .num5');

// Select all the increment buttons
const addButtons = document.querySelectorAll('.add1, .add2, .add3, .add4, .add5');

// Select all the decrement buttons
const subtractButtons = document.querySelectorAll('.deduct1, .deduct2, .deduct3, .deduct4, .deduct5');

// Add event listeners for increment buttons
addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        numElements[index].textContent = parseInt(numElements[index].textContent) + 1;
    });
});

// Add event listeners for decrement buttons
subtractButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentValue = parseInt(numElements[index].textContent);
        if (currentValue > 0) {
            numElements[index].textContent = currentValue - 1;
        }
    });
});

//summary table for the tickets page

//check mobile number and email
document.addEventListener("DOMContentLoaded", function () {
  const mobileInput = document.getElementById("mobilenum");
  const mobileError = document.getElementById("mobile_error");

  mobileInput.addEventListener("input", function () {
      const isValid = validateMobileNumber(mobileInput.value);
      if (isValid) {
          mobileError.textContent = "";
      } else {
          mobileError.textContent = "Invalid mobile number";
      }
  });

  function validateMobileNumber(number) {
      // Use the plugin's isValidNumber function to check if the number is valid
      return window.intlTelInputUtils.isValidNumber(number);
  }
});
//fullname*
document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const nameError = document.getElementById("name-error");

  firstNameInput.addEventListener("input", validateNames);
  lastNameInput.addEventListener("input", validateNames);

  function validateNames() {
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();

      if (firstName === "" || lastName === "") {
          nameError.textContent = "Both first name and last name are required";
      } else {
          nameError.textContent = "";
      }
  }
});



 //time*

// Add this code inside the <script> tag in your Tickets.js file
document.addEventListener("DOMContentLoaded", function () {
  // Get the checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="time"]');
  // Get the element where you want to display the selected time
  const displayTimeElement = document.getElementById("displayTimeslots");

  // Event listener for checkbox changes
  checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
          updateSelectedTimes();
      });
  });

  // Function to update the selected times in the summary
  function updateSelectedTimes() {
      const selectedTimes = Array.from(checkboxes)
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.value)
          .join(", ");

      displayTimeElement.textContent = selectedTimes || "Timeslots"; // Set the text content to selectedTimes or "Timeslots" if no checkboxes are selected
  }
});

//duration*

// Add this code inside the <script> tag in your Tickets.js file
document.addEventListener("DOMContentLoaded", function () {
  // Get the checkboxes
  const offPeakCheckboxes = document.querySelectorAll('.off-peakhours input[type="checkbox"]');
  const peakCheckboxes = document.querySelectorAll('.peakhours input[type="checkbox"]');
  // Get the element where you want to display the duration
  const displayDurationElement = document.getElementById("displayDuration");

  // Event listeners for checkbox changes
  offPeakCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
          updateSelectedDuration();
      });
  });

  peakCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
          updateSelectedDuration();
      });
  });

  // Function to update the selected duration in the summary
  function updateSelectedDuration() {
      const selectedOffPeakHours = Array.from(offPeakCheckboxes)
          .filter((checkbox) => checkbox.checked)
          .length;

      const selectedPeakHours = Array.from(peakCheckboxes)
          .filter((checkbox) => checkbox.checked)
          .length;

      const totalDuration = selectedOffPeakHours + selectedPeakHours;

      const offPeakDuration = selectedOffPeakHours === 1 ? "1 Off-peakhour" : `${selectedOffPeakHours} Off-peakhours`;
      const peakDuration = selectedPeakHours === 1 ? "1 Peakhour" : `${selectedPeakHours} Peakhours`;

      const durationText = totalDuration === 1 ? "1 hr" : `${totalDuration} hrs (${offPeakDuration} : ${peakDuration})`;

      displayDurationElement.textContent = durationText;
  }
});

//updating ticket charges in summary table

const ticketCounts = {
  num1: 0, // adultTickets
  num2: 0, // childTickets
  num3: 0, // FAdultTickets
  num4: 0, // FChildTickets
  num5: 0, // Infant
};

// Function to update ticket counts and calculate charges
function updateTicketCount(ticketType, increment) {
  if (increment) {
      ticketCounts[ticketType]++;
  } else {
      if (ticketCounts[ticketType] > 0) {
          ticketCounts[ticketType]--;
      }
  }
  updateTable();
}

// Function to update the table based on the ticket counts
function updateTable() {
  const ticketTableBody = document.getElementById("ticketTableBody");
  ticketTableBody.innerHTML = "";

  const ticketTypes = ["num1", "num2", "num3", "num4", "num5"];
  const ticketPrices = [14, 7, 33, 18, 0]; // Add corresponding ticket prices

  let totalPayable = 0;

  ticketTypes.forEach((ticketType, index) => {
      const count = ticketCounts[ticketType];
      if (count > 0) {
          const row = document.createElement("tr");
          const label = document.createElement("td");
          const typeName = getTicketTypeName(index); // Function to get ticket type name
          label.textContent = `${count} ${typeName}`;
          const charge = document.createElement("td");
          const price = count * ticketPrices[index];
          charge.textContent = `$${price}`;
          row.appendChild(label);
          row.appendChild(charge);
          ticketTableBody.appendChild(row);
          
        
          totalPayable += price;
      }
  });

  const totalPayableCell = document.getElementById("totalPayable");
  totalPayableCell.textContent = `$${totalPayable}`;
 
}

// Attach event listeners to increment and decrement buttons for all ticket types
for (let i = 1; i <= 5; i++) {
  const addBtn = document.querySelector(`.add${i}`);
  const deductBtn = document.querySelector(`.deduct${i}`);

  addBtn.addEventListener("click", () => {
      updateTicketCount(`num${i}`, true);
  });

  deductBtn.addEventListener("click", () => {
      updateTicketCount(`num${i}`, false);
  });
}

// Function to get ticket type name based on index
function getTicketTypeName(index) {
  const ticketTypeNames = [
      "Sri Lankan Adult",
      "Sri Lankan Child",
      "Foreigner Adult",
      "Foreigner Child",
      "Infant"
  ];
  return ticketTypeNames[index];
}

//purchase button working

const dateInput = document.getElementById('inputdate');

// Get the element to display the selected date
const displayDateElement = document.getElementById('displaydate');

// Add an event listener to the input element
dateInput.addEventListener('input', function () {
  // Get the selected date value
  const selectedDate = inputdate.value;

  // Update the content of the display element with the selected date
  displayDateElement.textContent = selectedDate;
});


// Event listeners for buttons to add and subtract the number of adults
document.addEventListener('DOMContentLoaded', function() {
    // Function to get the current date and format it as "YYYY-MM-DD"
    function getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    // Update the element with the current date
    const currentDateElement = document.getElementById('displaydate');
    currentDateElement.textContent = getCurrentDate();
  });

    // Get input elements
    const date = document.getElementById('inputdate');
    const continueButton = document.getElementById('nxt');
    
    // Add event listeners to inputs
    date.addEventListener('input', validateForm);

    // Function to check if all required fields are filled
    function checkRequiredFields() {
        const selectedDate = date.value;

        // Add additional checks for other required fields
        // For example, if you have a name field:
        // const nameInput = document.getElementById('name');
        // const nameValue = nameInput.value;
        // Then add: if (!nameValue) return false;
        
        // Return true if all required fields are filled
        return selectedDate /* && otherRequiredFields */;
    }

    // Function to validate the form and enable/disable the button
    function validateForm() {
        if (checkRequiredFields()) {
            continueButton.removeAttribute('disabled');
        } else {
            continueButton.setAttribute('disabled', 'true');
        }
    }

    // disable links
    const homeLink = document.getElementById("homelink");
const ticketsLink = document.getElementById("ticketslink");
const detailsLink = document.getElementById("detailslink");
const paymentLink = document.getElementById("paymentlink");
const confirmationLink = document.getElementById("confirmationlink");

// Add click event listeners to disable each link separately

detailsLink.addEventListener("click", function(event) {
    event.preventDefault();
});

paymentLink.addEventListener("click", function(event) {
    event.preventDefault();
});

confirmationLink.addEventListener("click", function(event) {
    event.preventDefault();
});
    //local storage
    function StoreData(){

        const currentDateElement = document.getElementById('displaydate');
        const tme = document.getElementById("displayTimeslots")
        const ndura = document.getElementById("displayDuration");
        const pdura = document.getElementById("ticketTableBody");
       // const slad = document.getElementById("#ticketTableBody #SumSlAd");
        const slch = document.getElementById("SumSlCh");
        const foad = document.getElementById("SumFAd");
        const foch = document.getElementById("SumFCh");
        const inf = document.getElementById("SumInfant");
        const total = document.getElementById("totalPayable");
      
       
       localStorage.setItem('date', currentDateElement.innerText);
       localStorage.setItem('Time',tme.innerText);
       localStorage.setItem('ndura',ndura.innerText);
        localStorage.setItem('pdura',pdura.innerText);
       localStorage.setItem('cell1Value', slad.innerText);
       localStorage.setItem('SlCH',slch.innerText);
       localStorage.setItem('FAd',foad.innerText);
       localStorage.setItem('FCh',foch.innerText);
       localStorage.setItem('Inf',inf.innerText);
       localStorage.setItem('total',total.innerText);

       function collectTableData() {
        const table = document.getElementById('tbl1');
        const tbody = table.querySelector('tbody');
        const rows = tbody.querySelectorAll('tr');
        const tdWiseData = [];
    
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                if (!tdWiseData[index]) {
                    tdWiseData[index] = [];
                }
                tdWiseData[index].push(cell.textContent);
            });
        });
        
        localStorage.setItem('tdWiseData', JSON.stringify(tdWiseData));
		localStorage.setItem('tdWiseData1', JSON.stringify(tdWiseData[0][1]));
        alert(tdWiseData);
    
        return tdWiseData;
    } 

       
        /* function collectTableData() {
        const table = document.getElementById('tbl1');
        const tbody = table.querySelector('tbody');
        const rows = tbody.querySelectorAll('tr');
        const data = [];
    
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = {
                slAD: cells[0].textContent,
               /*  SlCH: cells[1].textContent,
                FAd: cells[2].textContent,
                FCh: cells[3].textContent,
                Inf: cells[4].textContent, 
            };
            data.push(rowData);
        });
        alert(data);
    
        return data;
    }  */
        const tableBodyData = collectTableData();
        alert(tableBodyData);
        localStorage.setItem('tableBodyData',tableBodyData.innerText);
           
    } 
   
      nxt.addEventListener('click',StoreData);
//
// Assuming you have collected the selected ticket data like this
const selectedTickets = [
    { type: "SL Adults", quantity: 2, price: 10 },
    { type: "SL Children", quantity: 1, price: 5 },
    // ...other selected tickets
  ];
  
  // Store selected tickets data in local storage
  localStorage.setItem("selectedTickets", JSON.stringify(selectedTickets));
  // ... (your existing code)

// Function to update the table based on the ticket counts
function updateTable() {
    const ticketTableBody = document.getElementById("ticketTableBody");
    ticketTableBody.innerHTML = "";
  
    const ticketTypes = ["num1", "num2", "num3", "num4", "num5"];
    const ticketPrices = [14, 7, 33, 18, 0]; // Add corresponding ticket prices
  
    let totalPayable = 0;
  
    ticketTypes.forEach((ticketType, index) => {
      const count = ticketCounts[ticketType];
      if (count > 0) {
        const row = document.createElement("tr");
        const label = document.createElement("td");
        const typeName = getTicketTypeName(index); // Function to get ticket type name
        label.textContent = `${count} ${typeName}`;
        const charge = document.createElement("td");
        const price = count * ticketPrices[index];
        charge.textContent = `$${price}`;
        row.appendChild(label);
        row.appendChild(charge);
        ticketTableBody.appendChild(row);
        
        totalPayable += price;
      }
    });
  
    const totalPayableCell = document.getElementById("totalPayable");
    totalPayableCell.textContent = `$${totalPayable}`;
    
    // Store ticket counts and prices in local storage
    localStorage.setItem('ticketCounts', JSON.stringify(ticketCounts));
    localStorage.setItem('ticketPrices', JSON.stringify(ticketPrices));
  }
  
  // ... (your existing code)
  
  // Attach event listeners to increment and decrement buttons for all ticket types
  for (let i = 1; i <= 5; i++) {
    const addBtn = document.querySelector(`.add${i}`);
    const deductBtn = document.querySelector(`.deduct${i}`);
  
    addBtn.addEventListener("click", () => {
      updateTicketCount(`num${i}`, true);
      updateTable(); // Update the summary table
    });
  
    deductBtn.addEventListener("click", () => {
      updateTicketCount(`num${i}`, false);
      updateTable(); // Update the summary table
    });
  }
  
  // ... (your existing code)
  
  

    



 