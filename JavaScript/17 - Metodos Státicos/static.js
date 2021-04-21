/**
 * MÉTODOS ESTÁTICOS EN JS
 * Un método estático es aquel que se puede ejecutar sin instanciar la clase.
 */

 class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;       

    }
    sonar(){
        console.log("Estoy sonando");
    } 
    //Declaramos el método estático con la palabra reservada static
    static queEres(){
        console.log("Pues soy un perro");
    }
}

const a = new Animal("Luna","Hemgra");
console.log(a);
a.sonar();

class Perro extends Animal{
    constructor(nombre,genero,tamano){
        super(nombre,genero);
        this.tamano = tamano;
        this.raza = null;

    }
    ladrar(){
        console.log("Estoy ladrando");
    }
    //así declaramos un método get en js
    get getRaza(){
        return this.raza;
    }
    //así declaramos un método set en js
    set setRaza(raza){
        this.raza = raza
    }
}

const b = new Perro("Isis","Hembra","Gorda");
console.log(b)
b.sonar();
b.ladrar();

//De esta forma mandamos a llamar al método stático sin instanciar la clase
Animal.queEres();
//Esto nos saca error en consola
/* Animal.sonar(); */

/**
 * Métodos Setters y getters.
 * Nos permites establecer y obtener el valor de un atributo de una clase - ver arriba declaración
 */

//Java script trata los métodos setters y getters como atributos, o sea que hay que trabajarlos sin los paréntesis de los métodos. para asignar con el igual y para consultar sin los parénteses
console.log(b.getRaza);
b.setRaza = "Pastor";
console.log(b.getRaza);


