document.addEventListener("DOMContentLoaded", (e)=>{
    const includeHTML = (el,url) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", e => {
            if(xhr.readyState !== 4 ){
                return;
            };

            if(xhr.status >= 200 && xhr.status < 300){
                el.outerHTML = xhr.responseText;
            } else {
                let message = xhr.statusText || "Error al cargar el archivo"
                el.outerHTML = `<div> ${xhr.status}: ${message}</div>`
            }
        });
        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type","text/html;charset=utf-");
        xhr.send();
    }

    document.querySelectorAll("[data-include]").forEach( el => includeHTML(el,el.getAttribute("data-include")))

});