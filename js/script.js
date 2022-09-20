/*<i class="fa-solid fa-x"></i>   X ICON FOR MENU*/

function menu(){
    const icon = document.getElementById('icon');
    const menu = document.getElementsByClassName("menu");
 
    if(icon.className == "fa-solid fa-bars"){
         icon.setAttribute("class","fa-solid fa-x");
         menu[0].style.display = "block";
         menu[1].style.display = "block";
    }else{
         icon.setAttribute("class","fa-solid fa-bars");
         menu[0].style.display = "none";
         menu[1].style.display = "none";
    }
 }