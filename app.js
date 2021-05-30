'use strict';
//what we need to do?
// calculate the number of cookies each location must make every day:
// The number of cookies to make depends on the hours of operation from 6am to 8pm
//minCustomerH, maxCustomerH
// Avg number of cookies per customer 
// method for random hour

let hourOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

//console.log(hourOperation)


// Seattle Location: min ,max , avg,random
let seattleShop = {

    minH: 23,
    maxH: 65,
    avgCookies: 6.3,
    
    randomCustomerPerHour: [],
    avgCookiesPerHour: [],

    getRandomCustomerPerHour: function () {
        this.randomCustomerPerHour= randomNumber(23, 65);
        console.log(this.randomCustomerPerHour)
    },

    getAvgCookiesPerHour: function(){
        this.avgCookiesPerHour.push(this.randomCustomerPerHour*this.avgCookies)
        console.log(this.avgCookiesPerHour)
    },




}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

seattleShop.getRandomCustomerPerHour();
seattleShop.getAvgCookiesPerHour();


// let parent= document.getElementById('seatle');
let articleElement=document.createElement('seattle');
// parent.appendChild(articleElement);
// console.log(parent);

// // HTML
 
let ulElement=document.createElement('ul');
// append
articleElement.appendChild(ulElement);


for (let i = 0; i < hourOperation.length; i++) {
     console.log(seattleShop.getAvgCookiesPerHour[i]);

    // create li 
    let liElement=document.createElement('li');

    // append
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent=seattleShop.getAvgCookiesPerHour[i];
}