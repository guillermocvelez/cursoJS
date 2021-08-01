(()=> {
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();
    

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        
        return res.json()
    })
    .then((json)=>{
        
        json.forEach((el)=> {
            const $li = document.createElement('li')
            $li.innerHTML = `${el.name} - ${el.email} - ${el.phone}`;
            $fragment.appendChild($li)
        })
        $xhr.appendChild($fragment)
        
    })
    .catch(err =>{
        console.log("Error");
    })
    .finally(()=> {
        
    });
    
    
})();

(()=> {
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();

            json.forEach((el)=> {
                const $li = document.createElement('li')
                $li.innerHTML = `${el.name} - ${el.email} - ${el.phone}`;
                $fragment.appendChild($li)
            })
            $fetchAsync.appendChild($fragment)

            console.log(res,json)
        } 
        catch(err) {

        }
        finally {
            console.log("Se ejecuta tambien si o si")
        }
        
    }


    getData();
})();

(()=> {
    const $axios = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        let json = res.data
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li)
        })
        $axios.appendChild($fragment);
    })
    .catch(err => {
        console.log("Estamos en el catch",err);
    })
    .finally(() => {
        console.log("Esto se ejecuta si o si")
    })


})();