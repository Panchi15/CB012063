
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
  }//name
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
