/*<i class="fa-solid fa-x"></i>   X ICON FOR MENU*/

function menu(){
    const icon = document.getElementById('icon');
    const menu = document.getElementsByClassName("menu");
 
    if(icon.className == "fa-solid fa-bars"){
         icon.setAttribute("class","fa-solid fa-x");
         menu[0].style.visibility = "visible";
         menu[1].style.visibility = "visible";
         scrollFunction();
    }else{
         icon.setAttribute("class","fa-solid fa-bars");
         scrollFunction();
         menu[0].style.visibility = "hidden";
         menu[1].style.visibility = "hidden";
    }
 }


function scrollFunction() {
     const m = document.getElementsByClassName("box1")[0];
     const m2 = document.getElementsByClassName("box2")[0];
  if (icon.className == "fa-solid fa-x") {
    m.style.top = "170px";
    m2.style.top = "280px";
  } else {
    /*m.style.top = "150px";*/
    m2.style.top = "170px";
  }
}

     
document.addEventListener('DOMContentLoaded', function() {
     var pics = document.querySelectorAll('.pic');
     var pics2 = document.querySelectorAll('.pic2');/*v2*/
     /*const pics = document.querySelectorAll('.pic');*/
     const lastPic = pics.length - 1;
     const lastPic2 = pics2.length - 1;/*v2*/

     const transitionDuration = 800; // matches CSS
     const transitionDelay = 3000; // up to you
     const totalDelay = transitionDuration + transitionDelay;
     const intervalDelay = (transitionDuration * 2) + transitionDelay; // time to fade out + time to fade in + time to stay active

     function toggleClass() {
     const activePic = document.querySelector('.pic.active');
     const activePic2 = document.querySelector('.pic2.active'); /*v2*/

     const activeIndex = Array.prototype.indexOf.call(pics, activePic);
     const activeIndex2 = Array.prototype.indexOf.call(pics2, activePic2);/*v2*/

     const nextIndex = activeIndex === lastPic ? 0 : activeIndex + 1;
     const nextIndex2 = activeIndex2 === lastPic2 ? 0 : activeIndex2 + 1;

     const nextPic = pics[nextIndex];
     const nextPic2 = pics2[nextIndex2];/*v2*/
     

     setTimeout(() => activePic.classList.remove('active'), transitionDelay);
     setTimeout(() => activePic2.classList.remove('active'), transitionDelay);/*v2*/
     setTimeout(() =>nextPic.classList.add('active'), totalDelay);
     setTimeout(() =>nextPic2.classList.add('active'), totalDelay);/*v2*/
     }
     setInterval(toggleClass, intervalDelay);
 });








