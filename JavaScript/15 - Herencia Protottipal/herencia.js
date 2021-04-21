/**
 * HErencia es la capacidad de heredar características un padre a un hijo. EN JS la herencia también se da a travéz de la herencia prototípica
 */

/**
 *Creamos una función constructora , dos instancias y un método hácial el prototipo 
  */
function Bicleta(marca,color,velocidades){
    this.marca = marca;
    this.color = color;
    this.velocidades = velocidades;
}

Bicleta.prototype.getVelocidades = function(){
    return console.log(`Esta bici tiene ${this.velocidades} velocidades`);
}

const cicla1 = new Bicleta("Orbea","Negra",9);
const cicla2 = new Bicleta("Specialized","Roja",11);

cicla1.getVelocidades();

/**
 * Digamos que para este ejemplo tenemos una clase padre que es bicicleta, pero hay varios tipos de bicicleta, por ejemplo una bicicleta para cross. de la siguiente manera declaramos una nueva clase constructora que va a heredar las propiedades ya establecidas en bicicleta
 */
function BiclaCross(marca,color,velocidades,marco) {
    this.super = Bicleta;
    this.super(marca,color,velocidades)
    this.marco = marco;
}

//BiclaCross hereda de Bicleta
BiclaCross.prototype  = new Bicleta();
BiclaCross.prototype.constructor = Bicleta;


//Como vemos cicla3 que es una BiclaCross tiene las propiedades y los métodos del prototipo padre
const cicla3 = new BiclaCross("GW","Cromado",1,"xl");
console.log(cicla3);
console.log(cicla3.getVelocidades());

//Podemos reescribir los métodos
BiclaCross.prototype.getVelocidades = function(){
    console.log("Soy una corss, no tengo velocidades");
}

console.log(cicla3.getVelocidades());
//EL método padre digue estando igual, problar en consola
cicla1.getVelocidades();

