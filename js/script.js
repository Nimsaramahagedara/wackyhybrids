/*<i class="fa-solid fa-x"></i>   X ICON FOR MENU*/

function menu(){
    const icon = document.getElementById('icon');
    const menu = document.getElementsByClassName("menu");
 
    if(icon.className == "fa-solid fa-bars"){
         icon.setAttribute("class","fa-solid fa-x");
         menu[0].style.visibility = "visible";
         menu[1].style.visibility = "visible";
    }else{
         icon.setAttribute("class","fa-solid fa-bars");
         menu[0].style.visibility = "hidden";
         menu[1].style.visibility = "hidden";
    }
 }