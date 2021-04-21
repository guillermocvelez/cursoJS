#INSTALAR TYPESCRIPT

npm install -g typesrcript  - hay que instalarlo de manera global
tcs --version - Verificamos que la herramienta esté bien instalada

#USANDO EL COMPILADOR

Los archivos typescript tienen una extensión *.ts, el compilador genera una misma salida con el mismo nombre pero en *.js

    ##En la consola
    tsc hello.ts - Con este comando daremos como entrada el archivo ts y verifica la estructur del archivo, como resultado genera un archivo con el mismo nombr pero js
    node hello.js - El motor js de node V8 nos ayuda a correr el archivo de js.

    tsc --watch hello.ts - Es un servicio que se está ejecutanto constantemente para obsevar los cambios en este archivo

    tsc --init - Inicializamos el proyecto en ts y nos genera un tsconfig.json

    tsc - despues de iniciar el proyecto, estecomando busca automáticamente todos los archivo typescript y general el javascript

#PROYECTO EN TYPESCRIPT

EN el tsconfig.json debepos descomentar la linea outdir y colocar  el archivo donde se van a compilar nuestros archivos, por buenas prácticas siempre vamos a tener un directorio src donde están los archivos ts y una carpeta dist donde va el compilado en js