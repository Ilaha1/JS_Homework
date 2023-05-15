 const menu=document.getElementsByClassName("menu-ic");
 
function toogle(){
if(menu.style.display==='none'){
    menu.style.display="block";
}
else{
    menu.style.display = "none";

}
}
document.getElementsByClassName("menu-ic").addEvenListener("click",toogle);