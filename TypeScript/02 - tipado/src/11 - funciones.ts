/**
 * Funciones a lestilo js
 */



/**
 * Funciones en TS
 */

type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size: SquareSize){
    //se crea la fotografía
    console.log('Create picture using', title, date, size);
    
}

createPicture('Cumpleaños','2020-03-10','100x100');
createPicture('Viaje','2020-04-12','1000x1000');

// Parámetros opcionales
//El signo de interrogación justo despueés de la variable, le dice al compilador que este parámetro puedo  o no llegar
function createPicture2(title?: string, date?: string, size?: SquareSize){
    //se crea la fotografía
    console.log('Create picture using', title, date, size);
    
}
createPicture2('Viaje con parámetros opcionales','2020-04-12','1000x1000');
createPicture2('Viaje con parámetros opcionales 02','2020-04-12');
createPicture2();
//el tercer parámetro queda como undefined por el compilador

//Fat arrow function

let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    };
};

const picture = createPic('Foto con Arrow','2020-03-54','500x500');
console.log(picture);

