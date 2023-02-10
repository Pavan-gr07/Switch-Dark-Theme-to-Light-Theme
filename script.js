/* ******** */
var button=document.getElementById("btn");
var title=document.getElementById("title");
var activetheme="light";

function change_theme(){
    if(activetheme == "dark"){
        document.body.style.backgroundColor  = "#ffffff";
        document.body.style.color  = "#121212";
        button.value = 'Switch to Dark Theme';
        title.innerHTML = "JS Homework 2 (Light Mode)";
        activetheme = "light";
    }else{
        document.body.style.backgroundColor  = "#121212";
        document.body.style.color  = "#ffffff";
        button.value = 'Switch to Light Theme';
        title.innerHTML = "JS Homework 2 (Dark Mode)";
        activetheme = "dark";
    }
}
button.addEventListener("click",change_theme);
