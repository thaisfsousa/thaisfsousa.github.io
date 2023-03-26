document.getElementById("1").onclick = function (){changedisplay("projetos");}
document.getElementById("2").onclick = function (){changedisplay("experiencia");}
document.getElementById("3").onclick = function (){changedisplay("sobre");}
document.getElementById("4").onclick = function (){changedisplay("contato");}
document.getElementById("dev").onclick = function (){changedisplay("experiencia");}
document.getElementById("back").onclick = function (){window.location.reload();}
document.getElementById("back1").onclick = function (){window.location.reload();}
document.getElementById("back2").onclick = function (){window.location.reload();}
document.getElementById("back3").onclick = function (){window.location.reload();}
document.getElementById("panic").onclick = function (){window.open("https://thaisfsousa.github.io/dont_panic/");}
document.getElementById("linkedin").onclick = function (){window.open("https://www.linkedin.com/in/thaisfsousa/");}
document.getElementById("github").onclick = function (){window.open("https://github.com/thaisfsousa");}


function changedisplay(id) {
    const tabs = document.getElementsByClassName("tabcontent active");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = "tabcontent";
    }
    document.getElementById(id).className = "tabcontent active";
}

const gradient = document.querySelector(".gradient");

function onMouseMove(event) {
  gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(0,0,0) 0, rgb(99,99,99) 10%)';
}
document.addEventListener("mousemove", onMouseMove);
  