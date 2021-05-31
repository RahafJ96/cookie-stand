'use strict';
//what we need to do?
// calculate the number of cookies each location must make every day:
// The number of cookies to make depends on the hours of operation from 6am to 8pm
//minCustomerH, maxCustomerH
// Avg number of cookies per customer 
// method for random hour
//Render the output
// do it for all the locations

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
        for (let i=0 ; i< hourOperation.length; i++){
        this.randomCustomerPerHour.push( random(this.minH, this.maxH));
        // console.log(this.randomCustomerPerHour)
    }},

    getAvgCookiesPerHour: function(){
        for (let i = 0; i < hourOperation.length; i++) {
            this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
            // console.log(this.avgCookiesPerHour)
            
        }
    },

    getRender: function(){
    
    
        let parent= document.getElementById('seatle');
        let articleElement=document.createElement('seattle');
        // parent.appendChild(articleElement);
        // console.log(parent);
        
        // // HTML
         
        let ulElement=document.createElement('ul');
        // append
        articleElement.appendChild(ulElement);
        
        
        // for (let i = 0; i < hourOperation.length; i++) {
        //      console.log(seattleShop.getAvgCookiesPerHour[i]);
        
        //     // create li 
        //     let liElement=document.createElement('li');
        
        //     // append
        //     ulElement.appendChild(liElement);
        
        //     // text content
        //     liElement.textContent=seattleShop.getAvgCookiesPerHour[i];
        // }
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

seattleShop.getRandomCustomerPerHour();
seattleShop.getAvgCookiesPerHour();
console.log(seattleShop);




// Tokyo Location: 
let tokyoShop = {

    minH: 3,
    maxH: 24,
    avgCookies: 1.2,

    randomCustomerPerHour: [],
    avgCookiesPerHour: [],

    getRandomCustomerPerHour: function () {
        for (let i=0 ; i< hourOperation.length; i++){
        this.randomCustomerPerHour.push( random(this.minH, this.maxH));
        // console.log(this.randomCustomerPerHour)
    }},

    getAvgCookiesPerHour: function(){
        for (let i = 0; i < hourOperation.length; i++) {
            this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
            // console.log(this.avgCookiesPerHour)
            
        }
    },


}


tokyoShop.getRandomCustomerPerHour();
tokyoShop.getAvgCookiesPerHour();







// Dubai Location: 
let dubaiShop = {

    minH: 11,
    maxH: 38,
    avgCookies: 3.7,

    randomCustomerPerHour: [],
    avgCookiesPerHour: [],

    getRandomCustomerPerHour: function () {
        for (let i=0 ; i< hourOperation.length; i++){
        this.randomCustomerPerHour.push( random(this.minH, this.maxH));
        // console.log(this.randomCustomerPerHour)
    }},

    getAvgCookiesPerHour: function(){
        for (let i = 0; i < hourOperation.length; i++) {
            this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
            // console.log(this.avgCookiesPerHour)
            
        }
    },




}


dubaiShop.getRandomCustomerPerHour();
dubaiShop.getAvgCookiesPerHour();



// Paris Location: 
let parisShop = {

    minH: 20,
    maxH: 38,
    avgCookies: 2.3,

    randomCustomerPerHour: [],
    avgCookiesPerHour: [],


    getRandomCustomerPerHour: function () {
        for (let i=0 ; i< hourOperation.length; i++){
        this.randomCustomerPerHour.push( random(this.minH, this.maxH));
        // console.log(this.randomCustomerPerHour)
    }},

    getAvgCookiesPerHour: function(){
        for (let i = 0; i < hourOperation.length; i++) {
            this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
            // console.log(this.avgCookiesPerHour)
            
        }
    },



}


parisShop.getRandomCustomerPerHour();
parisShop.getAvgCookiesPerHour();



// Lima Location: 
let limaShop = {

    minH: 2,
    maxH: 16    ,
    avgCookies: 4.6,

    randomCustomerPerHour: [],
    avgCookiesPerHour: [],

    getRandomCustomerPerHour: function () {
        for (let i=0 ; i< hourOperation.length; i++){
        this.randomCustomerPerHour.push( random(this.minH, this.maxH));
        // console.log(this.randomCustomerPerHour)
    }},

    getAvgCookiesPerHour: function(){
        for (let i = 0; i < hourOperation.length; i++) {
            this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerHour[i]*this.avgCookies))
            // console.log(this.avgCookiesPerHour)
            
        }
    },



}


limaShop.getRandomCustomerPerHour();
limaShop.getAvgCookiesPerHour();