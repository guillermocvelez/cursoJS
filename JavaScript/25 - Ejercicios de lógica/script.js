


import longitudCadena from './js/01.js';
import textoRecortado from './js/02.js';
import separarEspacios from './js/03.js';
import repetirTexto from './js/04.js';
import invertir from './js/05.js';
import igual from './js/06.js';
import validarFrase from './js/07.js';
import eliminarPatron from './js/08.js';
import { aleatorio,capicua,factorial } from './js/09.js'
 
console.log(longitudCadena(Math));
console.log(longitudCadena("Guillermo y Carolina"));

console.log(textoRecortado("Guillermo",3));

console.log(separarEspacios("Guillermo y Carolina"));

console.log(repetirTexto("Memo",5));

invertir("guillermo y carolina");

igual("Lorem ipsum dolor lorem amet, consectetur lorem elit. Ratione atque maxime at repudiandae lorem lorem perspiciatis provident, quidem possimus cum ipsam voluptatibus voluptatum similique lorem ipsum quibusdam ab nostrum laudantium","lorem");

validarFrase("reconocer");

eliminarPatron();
eliminarPatron("1xyz , 2xyz , 3xyz , 4xyz");
eliminarPatron("1xyz , 2xyz , 3xyz , 4xyz","xyz");

aleatorio();

capicua(2002);
capicua(3113);
capicua(1234);

factorial(10);
