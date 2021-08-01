const d = document;
const $main = d.querySelector('main');
const $file = d.getElementById('files');

const uploader = (file) => {
    //console.log(file);
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file',file);

    xhr.addEventListener("readystatechange",e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log(xhr.responseText)
        } else {
            console.log("Error");
        }
    });

    xhr.open('POST',"uploader.php");
    xhr.setRequestHeader("enc-type","multipart/form-data");
    xhr.send(formData);

}

d.addEventListener('change', e => {
    if(e.target === $file){
        //console.log(e.target.files);

        const files = Array.from(e.target.files); 
        files.forEach(el => uploader(el))
    }
})