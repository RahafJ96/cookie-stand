'use strict';
//This is the js file that i'm using
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
    locationName:'Seattle',
    minH: 23,
    maxH: 65,
    avgCookies: 6.3,
    totalCookies:0,

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
            this.totalCookies+=this.avgCookiesPerHour[i]
            
        }
    },

    getRender: function(){
    
    
        let parent= document.getElementById('parent');
        let nameElement= document.createElement('h3');
        nameElement.textContent=this.locationName;
        parent.appendChild(nameElement);

        // console.log(parent);
        
        // // HTML
         
        let ulElement=document.createElement('ul');
        // append
        parent.appendChild(ulElement);

        
        for (let i = 0; i < hourOperation.length; i++) {
            //  console.log(seattleShop.getAvgCookiesPerHour[i]);
            // create li 
            let liElement=document.createElement('li');
        
            // append
            ulElement.appendChild(liElement);
        
            // text content
            liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
        }
        
        let totalLi= document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent= `Total: ${this.totalCookies} cookies`
    }
    
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

seattleShop.getRandomCustomerPerHour();
seattleShop.getAvgCookiesPerHour();
seattleShop.getRender();
console.log(seattleShop);




// Tokyo Location: 
let tokyoShop = {

    locationName:'Tokyo',
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

    getRender: function(){
    
    
        let parent= document.getElementById('parent');
        let nameElement= document.createElement('h3');
        nameElement.textContent=this.locationName;
        parent.appendChild(nameElement);

        // console.log(parent);
        
        // // HTML
         
        let ulElement=document.createElement('ul');
        // append
        parent.appendChild(ulElement);

        
        for (let i = 0; i < hourOperation.length; i++) {
            //  console.log(seattleShop.getAvgCookiesPerHour[i]);
            // create li 
            let liElement=document.createElement('li');
        
            // append
            ulElement.appendChild(liElement);
        
            // text content
            liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
        }
    }

}


tokyoShop.getRandomCustomerPerHour();
tokyoShop.getAvgCookiesPerHour();
tokyoShop.getRender();
console.log(tokyoShop);






// Dubai Location: 
let dubaiShop = {

    locationName:'Dubai',
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

    getRender: function(){
    
    
        let parent= document.getElementById('parent');
        let nameElement= document.createElement('h3');
        nameElement.textContent=this.locationName;
        parent.appendChild(nameElement);

        // console.log(parent);
        
        // // HTML
         
        let ulElement=document.createElement('ul');
        // append
        parent.appendChild(ulElement);

        
        for (let i = 0; i < hourOperation.length; i++) {
            //  console.log(seattleShop.getAvgCookiesPerHour[i]);
            // create li 
            let liElement=document.createElement('li');
        
            // append
            ulElement.appendChild(liElement);
        
            // text content
            liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
        }
    }
    


}


dubaiShop.getRandomCustomerPerHour();
dubaiShop.getAvgCookiesPerHour();
dubaiShop.getRender();
console.log(dubaiShop);



// Paris Location: 
let parisShop = {

    locationName:'Paris',
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


    getRender: function(){
    
    
        let parent= document.getElementById('parent');
        let nameElement= document.createElement('h3');
        nameElement.textContent=this.locationName;
        parent.appendChild(nameElement);

        // console.log(parent);
        
        // // HTML
         
        let ulElement=document.createElement('ul');
        // append
        parent.appendChild(ulElement);

        
        for (let i = 0; i < hourOperation.length; i++) {
            //  console.log(seattleShop.getAvgCookiesPerHour[i]);
            // create li 
            let liElement=document.createElement('li');
        
            // append
            ulElement.appendChild(liElement);
        
            // text content
            liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
        }
    }

}


parisShop.getRandomCustomerPerHour();
parisShop.getAvgCookiesPerHour();
parisShop.getRender();
console.log(parisShop);


// Lima Location: 
let limaShop = {

    locationName:'Lima',
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


    getRender: function(){
    
    
        let parent= document.getElementById('parent');
        let nameElement= document.createElement('h3');
        nameElement.textContent=this.locationName;
        parent.appendChild(nameElement);

        // console.log(parent);
        
        // // HTML
         
        let ulElement=document.createElement('ul');
        // append
        parent.appendChild(ulElement);

        
        for (let i = 0; i < hourOperation.length; i++) {
            //  console.log(seattleShop.getAvgCookiesPerHour[i]);
            // create li 
            let liElement=document.createElement('li');
        
            // append
            ulElement.appendChild(liElement);
        
            // text content
            liElement.textContent=`${hourOperation[i]}: ${this.avgCookiesPerHour[i]} cookies`
        }
    }

}


limaShop.getRandomCustomerPerHour();
limaShop.getAvgCookiesPerHour();
limaShop.getRender();
console.log(limaShop);