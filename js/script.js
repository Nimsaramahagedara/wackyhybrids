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
    m2.style.top = "290px";
  } else {
    /*m.style.top = "150px";*/
    m2.style.top = "170px";
  }
}