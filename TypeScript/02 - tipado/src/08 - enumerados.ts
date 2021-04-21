/**
 * ENUMERADOS
 * Los enumerados permiten definir un conjunto de valores con nombre
 * Permiten asignar una variable amigable para valores numéricos que se adaptan al contexto de nuestra aplicación
 */

//
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const Landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape',Landscape);


/**
 * Tambien podemos hacer enum coc claves, como si fueran objetos
 */
enum Country{
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex'
}

const country: Country = Country.Colombia;
console.log(country);
