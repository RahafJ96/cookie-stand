'use strict';

let workingHours = [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am', ' 10:00am', ' 11:00am', ' 12:00am', ' 1:00pm', ' 2:00pm', ' 3:00pm', ' 4:00pm', ' 5:00pm', ' 6:00pm', ' 7:00pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let allShops=[]; 


function ShopLocation(locationName,minHours, maxHours, avgCookies) {
    // add properties:
    this.locationName = locationName;
    this.minHours = minHours;
    this.maxHours = maxHours;
    this.avgCookies = avgCookies;
    this.totalCookies = 0;
    this.avgCookiesPerHour = [];
    this.randomCustomerPerHour=[];
    allShops.push(this)
}

// make prototype for the Random Customer per Hour  method
ShopLocation.prototype.getRandomCustomerPerHour = function () {
    for (let i = 0; i < workingHours.length; i++) {
        
        this.randomCustomerPerHour.push(random(this.minHours,this.maxHours));    
        // console.log(this.randomCustomerPerHour)
    }

}
// make prototype for the Avg Cookie per Hour  method
ShopLocation.prototype.getAvgCookiesPerHour = function () {
    for (let i = 0; i < workingHours.length; i++) {
        
         this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies));
        // console.log(this.avgCookiesPerHour);
        this.totalCookies+=this.avgCookiesPerHour[i];
    }
}


// Create the Table:

//Header
function makeHeader() {
    //tr //th
    // Head
    let trow1 = document.createElement('tr');
    table1.appendChild(trow1);
    let tHead1 = document.createElement('th')
    trow1.appendChild(tHead1);
    tHead1.textContent='Name '
    
    // Working Hours
    for (let i = 0; i < workingHours.length; i++) {
        let tHead1 = document.createElement("th")
        trow1.appendChild(tHead1);
        tHead1.textContent= workingHours[i];
    }
    
    let tHead2 = document.createElement("th");
    trow1.appendChild(tHead2);
    tHead2.textContent= 'Daily Location Total'   
}
makeHeader()

//Render
ShopLocation.prototype.getRender = function () {
    
    let tRow = document.createElement("tr");
    table1.appendChild(tRow);
    let tData = document.createElement("td");
    tRow.appendChild(tData);
    tData.textContent= this.locationName;
    
    
    for (let i = 0; i < workingHours.length; i++) {
        let tData = document.createElement("td");
        tRow.appendChild(tData);
        tData.textContent=this.avgCookiesPerHour[i];     
    }
    let tTotal = document.createElement('td');
    tRow.appendChild(tTotal);
    tTotal.textContent = this.totalCookies;
}



    // Location names
let seattle = new ShopLocation('Seattle',23,65,6.3);
let tokyo = new ShopLocation('Tokyo',3,24,1.2);
let dubai = new ShopLocation('Dubai',11,38,3.7,[],[],0);
let paris = new ShopLocation('Paris',20,38,2.3);
let lima = new ShopLocation('Lima',2,16,4.6);


for (let i = 0; i < allShops.length; i++) {
    allShops[i].getRandomCustomerPerHour();
    allShops[i].getAvgCookiesPerHour();
    allShops[i].getRender();
}
console.log(allShops);


  
// Footer
function makeFooter() {
    let tRow2= document.createElement("tr");
    table1.appendChild(tRow2);

    let tFooter = document.createElement("th")
    tRow2.appendChild(tFooter);
    tFooter.textContent='Total';

    let totalofTotal= 0;
    
    for (let i = 0; i < workingHours.length; i++) {
        let total=0; let total2=0;
        for (let j = 0; j < allShops.length; j++) {
            total+= allShops[j].avgCookiesPerHour[i];
        }
        
        let finalData= document.createElement('td');
        tRow2.appendChild(finalData);
        finalData.textContent=total;
        totalofTotal+=total;       
        
    }
    let total2=0;
    let tFooter1 = document.createElement('th');
    tRow2.appendChild(tFooter1);
    tFooter1.textContent = totalofTotal;

}
makeFooter();



// --- Forms
// making the event the listener
// locationName,minNumber,maxNumber, avgNumber

let shopForm=document.getElementById('shopInfos');
shopForm.addEventListener('submit',submitter)

function submitter(event) {
    event.preventDefault();
    //console.log(event);
    let table1 = document.getElementById("table1");
    
    table1.innerHTML = "";
    makeHeader();
    
    let nameLocation=event.target.nameLocation.value;
    let minNumber=event.target.minNumber.value;
    let maxNumber=event.target.maxNumber.value;
    let avgNumber=event.target.avgNumber.value;
    
    let addedLocation=new ShopLocation(nameLocation,minNumber,maxNumber,avgNumber)
    
    for (let i = 0; i < allShops.length; i++) {
        allShops[i].getRandomCustomerPerHour();
        allShops[i].getAvgCookiesPerHour();
        allShops[i].getRender();
        
    }
    //    console.log(addedLocation);
    makeFooter();

    





}


