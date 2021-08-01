const d = document;
const $table = d.querySelector(".crud-table");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $template = d.getElementById("crud-template").content;
const fragment = d.createDocumentFragment();

console.log($table);

const ajax = (options) => {
    let {url, method,success,error,data} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status <300){
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}:${xhr.message}`)
        }
    });
    xhr.open(method || "GET",url);
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}



const getAll= () => {
    ajax({
        method:"GET",
        url: "http://localhost:3000/santos",
        success: (res) =>{
            console.log(res);
            res.forEach((el) =>{
                console.log($template);
                $template.querySelector(".name").textContent = el.nombre;
                $template.querySelector(".constelation").textContent = el.constelacion;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.name = el.nombre;
                $template.querySelector(".edit").dataset.constelation = el.constelacion;
                $template.querySelector(".delete").dataset.id = el.id;

                let $clone = d.importNode($template, true);
                fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild(fragment);
        },
        error: (err) =>{
            console.log(err);
            $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`)
        },
        data:null
    })
}

d.addEventListener("DOMContentLoaded",getAll())
d.addEventListener("submit", e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //CREAR
            ajax({
                url: "http://localhost:3000/santos",
                method: "POST",
                sucess: (res) =>{
                    location.reload();
                },
                error: (err)=>{
                    $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value
                }
            })
        } else {
            ajax({
                url: `http://localhost:3000/santos/${e.target.id.value}`,
                method: "PUT",
                sucess: (res) =>{
                    location.reload();
                },
                error: (err)=>{
                    $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value
                }
            })

        }
    }
});

d.addEventListener("click", e => {
    if(e.target.matches(".edit")){
        $title.textContent = "editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constelation;
        $form.id.value = e.target.dataset.id;
    }
    if(e.target.matches(".delete")){
        let isDelete = confirm(`Esta seguro que desea eliminar el id${e.target.dataset.id}?`);
        if(isDelete){
            ajax({
                url: `http://localhost:3000/santos/${e.target.dataset.id}`,
                method: "DELETE",
                sucess: (res) =>{
                    location.reload();
                },
                error: (err)=>{
                    $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
                },
                
            })
        } 
    }
})

