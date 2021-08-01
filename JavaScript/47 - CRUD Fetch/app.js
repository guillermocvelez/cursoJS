const d = document;
const $table = d.querySelector(".crud-table");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $template = d.getElementById("crud-template").content;
const fragment = d.createDocumentFragment();


const getAll = async () => {
    try{
        let res = await fetch("http://localhost:3000/santos")
        let json = await res.json()
        if(!res.ok) throw {status: res.status, statusText: res.statusText};
        console.log(json);
        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.constelation = el.constelacion;
            $template.querySelector(".delete").dataset.id = el.id;
            $template.querySelector(".constelation").textContent = el.constelacion;

            let $clone = d.importNode($template,true);
            fragment.appendChild($clone);
        });
        $table.querySelector('tbody').appendChild(fragment);

    }catch(err){
        let message = err.statusText || "Ocurrió un error"
        $table.insertAdjacentHTML("afterend", `<p><b>${err.status}: ${message}</b></p>`)

    }
}



d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //Create-POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"                        
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                }
                let res = await fetch("http://localhost:3000/santos",options);
                let json = res.json;
                
                if(!res.ok) throw {status: res.status, statusText: res.statusText};
                
            } catch(err) {
                let message = err.statusText || "Ocurrió un error"
                $table.insertAdjacentHTML("afterend", `<p><b>${err.status}: ${message}</b></p>`)
            }
        } else {
            //Actualización - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"                        
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                };
                let res = await axios(`http://localhost:3000/santos/${e.target.id.value}`,options);
                let json = await res.data;
                
                
            } catch(err) {
                let message = err.statusText || "Ocurrió un error"
                $table.insertAdjacentHTML("afterend", `<p><b>${err.status}: ${message}</b></p>`)
            }
        }
    }
});

d.addEventListener("click",async e => {

    if(e.target.matches(".edit")){
        $title.textContent = "editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constelation;
        $form.id.value = e.target.dataset.id;
    }
    if(e.target.matches(".delete")){
        let isDelete = confirm(`Esta seguro que desea eliminar el id${e.target.dataset.id}?`);
        if(isDelete){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"                        
                    }                    
                }
                let res = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`,options);
                let json = res.json();
                
                
            } catch(err) {
                let message = err.statusText || "Ocurrió un error"
                $table.insertAdjacentHTML("afterend", `<p><b>${err.status}: ${message}</b></p>`)
            }

        } 
    }
    
})





