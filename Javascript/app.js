'use strict';

let workingHours = [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am', ' 10:00am', ' 11:00am', ' 12:00am', ' 1:00pm', ' 2:00pm', ' 3:00pm', ' 4:00pm', ' 5:00pm', ' 6:00pm', ' 7:00pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let avgCookiesPerHour = [];
// let randomCustomerPerHour = [];
let allShops=[]; 

//Seattle Location

function ShopLocation(locationName,minHours, maxHours, avgCookies, randomCustomerPerHour,avgCookiesPerHour, totalCookies ) {
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


let seattle = new ShopLocation('Seattle',23,65,6.3,[],[],0);
seattle.getRandomCustomerPerHour();
seattle.getAvgCookiesPerHour();
    console.log(seattle);

// Create the Table:

//function for the Header
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

ShopLocation.prototype.getRender = function () {
    
    // Location names
    let tRow = document.createElement("tr");
    table1.appendChild(tRow);
    let tData = document.createElement("td");
    tRow.appendChild(tData);
    tData.textContent= this.locationName;


    for (let i = 0; i < workingHours.length; i++) {
        let tData = document.createElement("td");
        tRow.appendChild(tData);
        tData.textContent=this.randomCustomerPerHour[i];     
    }
    let tTotal = document.createElement('td');
    tRow.appendChild(tTotal);
    tTotal.textContent = this.totalCookies;
}

seattle.getRender();


let tokyo = new ShopLocation('Tokyo',3,24,1.2,[],[],0);
tokyo.getRandomCustomerPerHour();
tokyo.getAvgCookiesPerHour();
tokyo.getRender();

    console.log(tokyo);



let dubai = new ShopLocation('Dubai',11,38,3.7,[],[],0);
dubai.getRandomCustomerPerHour();
dubai.getAvgCookiesPerHour();
dubai.getRender();

    console.log(dubai);


let paris = new ShopLocation('Paris',20,38,2.3,[],[],0);
paris.getRandomCustomerPerHour();
paris.getAvgCookiesPerHour();
paris.getRender();

    console.log(paris);   

let lima = new ShopLocation('Lima',2,16,4.6,[],[],0);
lima.getRandomCustomerPerHour();
lima.getAvgCookiesPerHour();
lima.getRender();

    console.log(lima);       

function makeFooter() {
    let tRow2= document.createElement("tr");
    table1.appendChild(tRow2);

    let tFooter = document.createElement("th")
    tRow2.appendChild(tFooter);
    tFooter.textContent='Total';

    let totalofTotal= 0;
    
    for (let i = 0; i < workingHours.length; i++) {
        let total=0;
        for (let j = 0; j < allShops.length; j++) {
            total+= allShops[j].avgCookiesPerHour[i];
            console.log(total);
                     
        }

        let finalData= document.createElement('td');
        tRow2.appendChild(finalData);
        finalData.textContent=total;
        totalofTotal+=total;       
    }
    let tFooter1 = document.createElement('th');
    tRow2.appendChild(tFooter1);
    tFooter1.textContent = totalofTotal;
    
}
makeFooter();




// let hourOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// //console.log(hourOperation)


// // Seattle Location: min ,max , avg,random
// let seattleShop = {
//     locationName:'Seattle',
//     minH: 23,
//     maxH: 65,
//     avgCookies: 6.3,
//     totalCookies:0,

//     randomCustomerPerHour: [],
//     avgCookiesPerHour: [],

//     getRandomCustomerPerHour: function () {
//         for (let i=0 ; i< hourOperation.length; i++){
//         this.randomCustomerPerHour.push( random(this.minH, this.maxH));
//         // console.log(this.randomCustomerPerHour)
//     }},

//     getAvgCookiesPerHour: function(){
//         for (let i = 0; i < hourOperation.length; i++) {
//             this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
//             // console.log(this.avgCookiesPerHour)
//             this.totalCookies+=this.avgCookiesPerHour[i]

//         }
//     },

//     getRender: function(){


//         let parent= document.getElementById('parent');
//         let nameElement= document.createElement('h3');
//         nameElement.textContent=this.locationName;
//         parent.appendChild(nameElement);

//         // console.log(parent);

//         // // HTML

//         let ulElement=document.createElement('ul');
//         // append
//         parent.appendChild(ulElement);


//         for (let i = 0; i < hourOperation.length; i++) {
//             //  console.log(seattleShop.getAvgCookiesPerHour[i]);
//             // create li 
//             let liElement=document.createElement('li');

//             // append
//             ulElement.appendChild(liElement);

//             // text content
//             liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
//         }

//         let totalLi= document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent= `Total: ${this.totalCookies} cookies`
//     }

// }


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

// seattleShop.getRandomCustomerPerHour();
// seattleShop.getAvgCookiesPerHour();
// seattleShop.getRender();
// console.log(seattleShop);




// // Tokyo Location: 
// let tokyoShop = {

//     locationName:'Tokyo',
//     minH: 3,
//     maxH: 24,
//     avgCookies: 1.2,

//     randomCustomerPerHour: [],
//     avgCookiesPerHour: [],

//     getRandomCustomerPerHour: function () {
//         for (let i=0 ; i< hourOperation.length; i++){
//         this.randomCustomerPerHour.push( random(this.minH, this.maxH));
//         // console.log(this.randomCustomerPerHour)
//     }},

//     getAvgCookiesPerHour: function(){
//         for (let i = 0; i < hourOperation.length; i++) {
//             this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
//             // console.log(this.avgCookiesPerHour)

//         }
//     },

//     getRender: function(){


//         let parent= document.getElementById('parent');
//         let nameElement= document.createElement('h3');
//         nameElement.textContent=this.locationName;
//         parent.appendChild(nameElement);

//         // console.log(parent);

//         // // HTML

//         let ulElement=document.createElement('ul');
//         // append
//         parent.appendChild(ulElement);


//         for (let i = 0; i < hourOperation.length; i++) {
//             //  console.log(seattleShop.getAvgCookiesPerHour[i]);
//             // create li 
//             let liElement=document.createElement('li');

//             // append
//             ulElement.appendChild(liElement);

//             // text content
//             liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
//         }
//     }

// }


// tokyoShop.getRandomCustomerPerHour();
// tokyoShop.getAvgCookiesPerHour();
// tokyoShop.getRender();
// console.log(tokyoShop);






// // Dubai Location: 
// let dubaiShop = {

//     locationName:'Dubai',
//     minH: 11,
//     maxH: 38,
//     avgCookies: 3.7,

//     randomCustomerPerHour: [],
//     avgCookiesPerHour: [],

//     getRandomCustomerPerHour: function () {
//         for (let i=0 ; i< hourOperation.length; i++){
//         this.randomCustomerPerHour.push( random(this.minH, this.maxH));
//         // console.log(this.randomCustomerPerHour)
//     }},

//     getAvgCookiesPerHour: function(){
//         for (let i = 0; i < hourOperation.length; i++) {
//             this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
//             // console.log(this.avgCookiesPerHour)

//         }
//     },

//     getRender: function(){


//         let parent= document.getElementById('parent');
//         let nameElement= document.createElement('h3');
//         nameElement.textContent=this.locationName;
//         parent.appendChild(nameElement);

//         // console.log(parent);

//         // // HTML

//         let ulElement=document.createElement('ul');
//         // append
//         parent.appendChild(ulElement);


//         for (let i = 0; i < hourOperation.length; i++) {
//             //  console.log(seattleShop.getAvgCookiesPerHour[i]);
//             // create li 
//             let liElement=document.createElement('li');

//             // append
//             ulElement.appendChild(liElement);

//             // text content
//             liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
//         }
//     }



// }


// dubaiShop.getRandomCustomerPerHour();
// dubaiShop.getAvgCookiesPerHour();
// dubaiShop.getRender();
// console.log(dubaiShop);



// // Paris Location: 
// let parisShop = {

//     locationName:'Paris',
//     minH: 20,
//     maxH: 38,
//     avgCookies: 2.3,

//     randomCustomerPerHour: [],
//     avgCookiesPerHour: [],


//     getRandomCustomerPerHour: function () {
//         for (let i=0 ; i< hourOperation.length; i++){
//         this.randomCustomerPerHour.push( random(this.minH, this.maxH));
//         // console.log(this.randomCustomerPerHour)
//     }},

//     getAvgCookiesPerHour: function(){
//         for (let i = 0; i < hourOperation.length; i++) {
//             this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
//             // console.log(this.avgCookiesPerHour)

//         }
//     },


//     getRender: function(){


//         let parent= document.getElementById('parent');
//         let nameElement= document.createElement('h3');
//         nameElement.textContent=this.locationName;
//         parent.appendChild(nameElement);

//         // console.log(parent);

//         // // HTML

//         let ulElement=document.createElement('ul');
//         // append
//         parent.appendChild(ulElement);


//         for (let i = 0; i < hourOperation.length; i++) {
//             //  console.log(seattleShop.getAvgCookiesPerHour[i]);
//             // create li 
//             let liElement=document.createElement('li');

//             // append
//             ulElement.appendChild(liElement);

//             // text content
//             liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
//         }
//     }

// }


// parisShop.getRandomCustomerPerHour();
// parisShop.getAvgCookiesPerHour();
// parisShop.getRender();
// console.log(parisShop);


// // Lima Location: 
// let limaShop = {

//     locationName:'Lima',
//     minH: 2,
//     maxH: 16    ,
//     avgCookies: 4.6,

//     randomCustomerPerHour: [],
//     avgCookiesPerHour: [],

//     getRandomCustomerPerHour: function () {
//         for (let i=0 ; i< hourOperation.length; i++){
//         this.randomCustomerPerHour.push( random(this.minH, this.maxH));
//         // console.log(this.randomCustomerPerHour)
//     }},

//     getAvgCookiesPerHour: function(){
//         for (let i = 0; i < hourOperation.length; i++) {
//             this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
//             // console.log(this.avgCookiesPerHour)

//         }
//     },


//     getRender: function(){


//         let parent= document.getElementById('parent');
//         let nameElement= document.createElement('h3');
//         nameElement.textContent=this.locationName;
//         parent.appendChild(nameElement);

//         // console.log(parent);

//         // // HTML

//         let ulElement=document.createElement('ul');
//         // append
//         parent.appendChild(ulElement);


//         for (let i = 0; i < hourOperation.length; i++) {
//             //  console.log(seattleShop.getAvgCookiesPerHour[i]);
//             // create li 
//             let liElement=document.createElement('li');

//             // append
//             ulElement.appendChild(liElement);

//             // text content
//             liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
//         }
//     }

// }


// limaShop.getRandomCustomerPerHour();
// limaShop.getAvgCookiesPerHour();
// limaShop.getRender();
// console.log(limaShop);