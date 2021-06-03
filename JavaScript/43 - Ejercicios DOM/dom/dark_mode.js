export default function darkTHeme(btn, classDark){
    const $themeBtn = document.querySelector(btn);
    const $selectores = document.querySelectorAll("[data-dark]");

    console.log($selectores);

    let moon = "🌙";
    let sun = "☀️";

    document.addEventListener("click", e => {
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
                $selectores.forEach(sel =>{
                    sel.classList.add(classDark)
                })
                $themeBtn.textContent = sun;
             }else {
                $selectores.forEach(sel =>{
                    sel.classList.remove(classDark)
                })
                $themeBtn.textContent = moon;
            }

        }
        
    })
}