document.getElementById("panic").onclick = function (){window.open("https://thaisfsousa.github.io/dontPanic/");}
document.getElementById("snake").onclick = function (){window.open("https://thaisfsousa.github.io/snakeGame/index.html");}
document.getElementById("cub3d").onclick = function (){window.open("https://thaisfsousa.github.io/raycasting/index.html");}
document.getElementById("linkedin").onclick = function (){window.open("https://www.linkedin.com/in/thaisfsousa/");}
document.getElementById("github").onclick = function (){window.open("https://github.com/thaisfsousa");}
document.getElementById("1").onclick = function (){changedisplay("thais1");}
document.getElementById("2").onclick = function (){changedisplay("thais2");}
document.getElementById("3").onclick = function (){changedisplay("thais3");}


function changedisplay(id) {
  const tabs = document.getElementsByClassName("show");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = "hidden";
  }
  document.getElementById(id).className = "show";
}
