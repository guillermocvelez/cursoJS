/**
 * 
 */

console.log("**************Elementos del documento***************");
console.log(window);
console.log("No es necesario poner window, con document es suficiente");
console.log(document);
//elementos del document:
console.log(document.head);
console.log(document.body);

console.log("**************Nodos y Selectores***************");

/**
 * TIPOS DE NODO
 * ELEMENT_NODE - El más general, con el que se interactua normalmente, etiquetas tags y ids
 * TEXXT_NODE - Representa un contexto del texto del elemento o un atributo
 * PROCESSING_INSTRUCTION_NODE - representa instrucciones
 * COMMENT_NODE - Comentarios
 * DOCUMENT_NODE - 
 * 
 * **/


 console.log("**************YA NO SE USAN***************");
 //Get elemento by tag name - retorna una colección
console.log(document.getElementsByTagName('li'));
//getElemenByClassName
console.log(document.getElementsByClassName("card"));
//getElementBYUD
console.log(document.getElementById("menu"));


console.log("**************Se USAN POPULARES**************");
//querySelector - recibe cualquier elemento válido de HTML
//El método query selector es menos eficiente que getElementBYId
//QuerySelector solo trar el primer elemento
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
//querySelectorAll trae todo  - retorna una nodelist - Podemos usar algunos métodos de arreglos
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);


console.log("**************ACCEDER A ATRIBUTOS**************");

console.log(document.documentElement.lang);

document.documentElement.lang = "es";
console.log("**************CAMBIANDO ATRIBUTOS**************");
console.log(document.documentElement.lang);

console.log("**************GUARDANDO LOS ELEMENTOS EN VARIABLES**************");

const linkDOM = document.querySelector('.link-dom');

//es muy buena práctica declarar las variables relacionadas con el DOM anteponerlas de un simblo de $

const $linkDOM = document.querySelector('.link-dom');
$linkDOM.setAttribute("target","_blank")

$linkDOM.setAttribute("href","https://guillermocv.com")

//Data-ttributes

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset.description)


console.log("**************INTERACTUANDO CON ESTILOS**************");

$linkDOM.style.color = "green";
$linkDOM.style.fontSize = "24px";

console.log("**************ACCEDER A LAS CLASES**************");

const $listItem = document.querySelectorAll("li");
const $li = document.querySelector("li");
console.log($listItem);

$listItem.forEach(element => {    
    element.classList.add("red");
});

console.log($li.classList.contains("blue"));

// $li.classLIst,replace("clase1",clase2);

console.log("**************DON Y TEXTO HTML**************");

const $parrafo = document.querySelector('#parrafo');

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
            API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>`;


 $parrafo.innerHTML = text;   
 $parrafo.outerHTML = text;

 console.log("**************DOM TRAVERSING**************");

 //eL DOM traversign siguiente nos sirve para recorrero SOLO LOS ELEMENTOS no tidos los hijos de nodos.

 const $cards = document.querySelector(".cards");
 console.log($cards);
 console.log($cards.children);
 console.log($cards.children[2]);
 console.log($cards.parentElement);
 console.log($cards.firstElementChild);
 console.log($cards.lastElementChild);
 console.log($cards.previousElementSibling);
 console.log($cards.nextElementSibling);

 //Este método nuevo busca en ansestro más cercano del tipo de elemento que le indicamos
 console.log($cards.closest("div"));//esto devuelve null
 console.log($cards.children[3].closest("section"));//Esto devuelve el section wrapper

 console.log("**************CREAR ELEMENTOS CON JS**************");

 const $figure = document.createElement('figure');
 const $image = document.createElement('img');
 const $figcaption = document.createElement('figcaption');
 const $figCaptionText = document.createTextNode("Animals");
 
 $image.setAttribute("src","https://placeimg.com/200/200/animals");
 $image.setAttribute("alt","Animals");
 $figcaption.appendChild($figCaptionText);
 $figure.appendChild($image);
 $figure.appendChild($figCaptionText);
 $cards.appendChild($figure);

 /**
  * TEMPLATES - Podemos crear elementos dinámicos antes de cargarlos al DOM y así no consumir tantos 
  * recuros. El manejo del DOM es muy demandante
  */
 
const $template = document.getElementById('templateCard').content;
const $fragment = document.createDocumentFragment();
const cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;
    //Clonar Nodo - el true copia toda la estructura interna - al false solo copia la etiqueta padre
    let $clone =  document.importNode($template,true);
    $fragment.appendChild($clone)
});
$cards.appendChild($fragment);


console.log("**************MODIFICANDO ELEMENTOS OLD STYLE**************");


//old style
const $newCard = document.createElement("figure");

$newCard.innerHTML = `
    <h3>Este elemento lo estamos reemplazando</h3>
`;

//Reemplaza un elemetno
/* $cards.replaceChild($newCard,$cards.children[2]) */

//Inserta ántes
/* $cards.insertBefore($newCard,$cards.firstElementChild); */

//Eliminar
/* $cards.removeChild($cards.lastElementChild) */

console.log("**************MODIFICANDO ELEMENTOS COOL STYLE**************");

/**
 * InsertAdjacent...
 * inserAdjacentElement(position, el)
 * insertAdjacentHTML(position, el)
 * insertAdjacentText(position, text)
 * 
 * POSICIONES
 * 
 * beforebegin(hermano anterior)
 * afterbegin(primer hijo)
 * beforeend(ultimo hijo)
 * afterend(hermano siguiente)
 */

$cards.insertAdjacentElement("beforeend",$newCard)
$newCard.insertAdjacentText("beforebegin","Insertdo con insertAdjacentText")