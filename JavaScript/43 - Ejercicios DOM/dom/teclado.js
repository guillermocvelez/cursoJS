const d = document;
let x =0,
    y=0

export function shortcuts(e) {
    if(e.key === "a" && e.altKey){
        alert("Evento shortcut alt+a")
    }
}

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();

    
    /* const move = (direction) => {
        
    }
 */
    switch(e.keyCode){
        
        case 37:
            e.preventDefault();
            if(limitsBall.left > limitStage.left) x--
            break;
        case 38:
            e.preventDefault();
            if(limitsBall.top > limitStage.top) y--;
            break;
        case 39:
            e.preventDefault();
            if(limitsBall.right < limitStage.right) x++;
            break;
        case 40:
            e.preventDefault();
            if(limitsBall.bottom < limitStage.bottom) y++;
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px )`
}
