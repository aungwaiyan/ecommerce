$(document).ready(function(){
    // START BANNNER 
    $('.carousel').carousel({
        interval:6000,
        pause:'hover'
    })
    // END BANNER 
});

// Start Product Section 

const shirt = document.querySelector('.shirts');
const tshirt = document.querySelector('.tshirts');
const backpack = document.querySelector('.backpacks');
const shoe = document.querySelector('.shoes');

const shirtdisplay = document.querySelector('.shirtdisplays');
const tshirtdisplay = document.querySelector('.tshirtdisplays');
const backpackdisplay = document.querySelector('.backpackdisplays');
const shoedisplay = document.querySelector('.shoedisplays');

shirt.addEventListener('click',function(e){
     shirtdisplay.style.display="flex";
     tshirtdisplay.style.display="none";
     backpackdisplay.style.display = "none";
     shoedisplay.style.display = "none";
     

});

tshirt.addEventListener('click',function(e){
    shirtdisplay.style.display="none";
    tshirtdisplay.style.display="flex";
    backpackdisplay.style.display = "none";
    shoedisplay.style.display = "none";
});

backpack.addEventListener('click',function(){
    shirtdisplay.style.display="none";
    tshirtdisplay.style.display="none";
    backpackdisplay.style.display = "flex";
    shoedisplay.style.display = "none";
});

shoe.addEventListener('click',function(){
    shoe.classList.remove('active');
    shirtdisplay.style.display="none";
    tshirtdisplay.style.display="none";
    backpackdisplay.style.display = "none";
    shoedisplay.style.display = "flex";
});
// End Product Section 

// Start Footer Section 
const years = document.getElementById('year');

let year = new Date().getFullYear();

years.textContent = year;

// End Footer Section 