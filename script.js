const noInternet=document.getElementsByClassName("noInternet");
const PreDisaster=document.getElementsByClassName("PreDisaster");
const DuringDisaster=document.getElementsByClassName("DuringDisaster");
const PostDisaster=document.getElementsByClassName("PostDisaster");

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
function openNav() {
    document.getElementById("mySidenav").style.width = "50vw";
  }