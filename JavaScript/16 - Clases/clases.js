/**
 * A partir del 2015 en ES6, js viendo que era necesario introducir clases en el estandan, incluyó las clases como algo que la comunidad llama "Azucar sintáctico", osea una forma de escribir más fáil, pero que por detras lo convierte en prototipos  y herencia prototipal. Solo para estandarizar un poco más la programación orientada a objetos y que se parezca de cierta manera a los otros lenguajes
 * */




/**
 * LA creación de clases en java se hace de la siguiente matera, con la palabra reservada class y por buenas prácticas el nombre de la clase comienza en mayúscula
 */

class Bicicleta{
    //Toda clase tiene un constructor, la cual valga la redundancia, tiene como función construir la instancia de la clase. EN este método pasamos los atributos.
    constructor(marca,color,tamano,velocidades){
        //asignamos cada atributo al contexto con la palabra this.
        this.marca = marca;
        this.color = color;
        this.tamano = tamano;
        this.velocidades = velocidades;
    } 
    //Los métodos los declaramos por medio de la notación object literal
    getVelocidad(){
        return console.log(`Esta bicicleta tiene ${this.velocidades} velocidades`);
    }

}

//De esta manera creamos la instancia de la clase
const b1 = new Bicicleta("Orbea","Negro","XL","11");

console.log(b1);
b1.getVelocidad();

/**
 * AHora, en JS se puede crear clases hijas de la siguiente manera, con la palabra reservada extends
 */

class cicloCross extends Bicicleta{
    
    //Como toda clase debe tener un constructor
    constructor(marca,color,tamano,velocidades,rin){
        //con el método super declaramos la herencia de esta clase hacia la clase padre
        super(marca,color,tamano,velocidades);
        this.rin = rin;        
        this.marca = marca;
    }
}

//Como vemos, la isntancia se genera incluyendo sus métodos
b2 = new cicloCross("GW","Cromado","XS",1,16);
console.log(b2);
b2.getVelocidad();


class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;       

    }
    sonar(){
        console.log("Estoy sonando");
    } 
}

const a = new Animal("Luna","Hemgra");
console.log(a);
a.sonar();

class Perro extends Animal{
    constructor(nombre,genero,tamano){
        super(nombre,genero);
        this.tamano = tamano;

    }
    ladrar(){
        console.log("Estoy ladrando");
    }
}

const b = new Perro("Isis","Hembra","Gorda");
console.log(b)
b.sonar();
b.ladrar();


//Clases Fernado Herrera
