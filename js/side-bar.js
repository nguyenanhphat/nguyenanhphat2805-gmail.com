const btnOpen = document.querySelector(".openbtn");
const closebtn = document.querySelector(".closebtn");

btnOpen.addEventListener("click", function() {
  const width = document.querySelector(".sidenav").offsetWidth;
  if (width === 300) {
    document.querySelector(".sidenav").style.width = "0";
  } else {
    document.querySelector(".sidenav").style.width = "300px";
  }
});

closebtn.addEventListener("click", function() {
  document.querySelector(".sidenav").style.width = "0";
});
