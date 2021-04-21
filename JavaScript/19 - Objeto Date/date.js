console.log("Hola");
const date = new Date();
console.log(date.toLocaleString());

const h = document.querySelector('h1');
h.innerHTML = date;
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
//el año se cuenta desde 1900
console.log(date.getYear());
//Este método si sirve para obtener el año completo
console.log(date.getFullYear());
//Horas
console.log(date.getHours());

/* const timer = setInterval(()=>{    
    h.innerHTML = date.toLocaleTimeString();
},1000); */


//Solo obtiene la fecha
console.log(date.toDateString());
//Solo muestra el formato dd/mm/aaa
console.log(date.toLocaleDateString());

//timestamp cuantos segundos han pasado desde el primero de enero de 1960
console.log(Date.now());

let cumpleMemo = new Date(1984,0,4);
console.log(cumpleMemo.toDateString());