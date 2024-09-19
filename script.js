const noInternet=document.getElementsByClassName("noInternet")[0];
const PreDisaster=document.getElementsByClassName("PreDisaster")[0];
const DuringDisaster=document.getElementsByClassName("DuringDisaster")[0];
const PostDisaster=document.getElementsByClassName("PostDisaster")[0];

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
function openNav() {
    document.getElementById("mySidenav").style.width = "50vw";
  }
function openSectionNoInternet() {
  if(noInternet.classList.contains("hidden")){
    noInternet.classList.remove("hidden");
    PreDisaster.classList.add("hidden");
    DuringDisaster.classList.add("hidden");
    PostDisaster.classList.add("hidden");
  }
}
function openSectionPreDisaster() {
  if(PreDisaster.classList.contains("hidden")){
    noInternet.classList.add("hidden");
    PreDisaster.classList.remove("hidden");
    DuringDisaster.classList.add("hidden");
    PostDisaster.classList.add("hidden");
  }
}
function openSectionDuringDisaster() {
  if(DuringDisaster.classList.contains("hidden")){
    noInternet.classList.add("hidden");
    PreDisaster.classList.add("hidden");
    DuringDisaster.classList.remove("hidden");
    PostDisaster.classList.add("hidden");
  }
}
function openSectionPostDisaster() {
  if(PostDisaster.classList.contains("hidden")){
    noInternet.classList.add("hidden");
    PreDisaster.classList.add("hidden");
    DuringDisaster.classList.add("hidden");
    PostDisaster.classList.remove("hidden");
  }
}
