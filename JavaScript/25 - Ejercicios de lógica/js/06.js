//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const igual = (cadena,repet) => {
    
    (cadena === "" ? console.log("La cadena no puede ser vacía")
        : console.log(repetido()));

        function repetido (){
            let repetido = 0;
            cadena.split(' ').forEach(element => {
                    
            if(element === repet){
                repetido += 1;
            }    
        })
        return repetido;    
    }

}



export default igual;