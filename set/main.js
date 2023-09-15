const value = document.querySelector("#value");

let count= 60;
value.textContent= count;

const crono= setInterval(function () {
     count--;
     value.textContent = count;
     if (count === 0) clearInterval(crono);
     value.textContent ="game over";
},100);

// es una funcion que se ejecuta cada determinado tiempo, 