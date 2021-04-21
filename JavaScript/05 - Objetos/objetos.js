/**
 * OBJETOS
 * En JS todo es un objeto
 * UN objeto es una colección de llaves y valores
 */

//una cadena String es un objeto
let a = new String("Guillermo");
console.log(a);
console.log(typeof(a));

//Declaración básica de un objeto - los objetos se declaran con const, esto debido a que es posible que un código externo cambie la referencia al objeto. Para asegurarnos que esto no pase usamos const que restringe una nueva asignación a ese espacio de memoria



const guillermo = {
    //Un objeto en sus llaves puede contener cualquier valor - el número de llaves puede ser infinito. 
    //A estos valores los llamamos atributos, esto para estar acorde al vocabulario y los conceptos de la POO general
    nombre: "Guillermo",
    apellido: "Castaño",
    edad: 37,

    //Los objetos tambien pueden tener métodos, estos métodos son funciones -esta forma aplica para ES5 para abajo
    saludar: function(){
        console.log("hola " +guillermo.nombre);
    },

    //Con ES6 lo declaramos de la siguiente manera - nos ahorramos la function
    //Siempre es recomendable trabajar con el estandar ES6 en adelante
    saludarDeNuevo() {
        /**
         * Recordemos que podemos usar las comillas francesas para hacer referencia a variables en JS. En ese caso utilizamos la palabra reservada this que hace referencia al objeto en que se encuentra. Más adelante sobre this
         */
        console.log(`Saludamos de nuevo ${this.nombre} ${this.apellido}`);
    }
}
//Para llamar el valor de una llave usamos la notación de punto objeto.llave
console.log(guillermo);
console.log(guillermo.apellido);

//llamamos al método de la función - Usamos la notación de punto objeto.metodo(), si obviamos las llaves tendremos un error
console.log(guillermo.saludar());
console.log(guillermo.saludarDeNuevo());

//El método Object.keys(objeto) me guarda todas las llaves en un arreglo, tanto como los atributos y los métodos
console.log(Object.keys(guillermo));

//Me guarda en un arreglo los valores de las llaves- SOLO LOS VALORES
console.log(Object.values(guillermo));


//MEdevuelve true o false si el método tiene una llave que coincida con el argumento
console.log(guillermo.hasOwnProperty("nombre"));//devuelve true
console.log(guillermo.hasOwnProperty("nacimiento"));//devuelve false



