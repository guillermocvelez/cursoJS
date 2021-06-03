import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import darkTHeme from "./dom/dark_mode.js";
import searchFilters from "./dom/filtro_busquedas.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import digitalClock from "./dom/relog.js"
import slider from "./dom/responsive_slider.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import {shortcuts,moveBall} from './dom/teclado.js'



const d = document;

d.addEventListener("DOMContentLoaded",(e) => {
    hamburguerMenu(".panel-btn",".panel",".menu a"); 
    digitalClock("#relog","#activar-relog","#desactivar-relog")   
    countdown("countdown","Jan 4,2022 11:00:00","Feliz Cumpleaños")
    scrollTopButton(".scroll-top-btn")
    darkTHeme(".dark-theme-btn","dark-mode")
    responsiveMedia("youtube","(min-width: 1024px)",
                    `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank">Ver video</a>`,  
                    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)",
                    `<a href="https://goo.gl/maps/QJGwKKVaLzfiMXwy8" target="_blank">Ver Mapa </a>`,
                    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15897.277340692643!2d-75.48406218238527!3d5.051884250120764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47658767a1b82b%3A0x4432972fa201a385!2sCAI%20La%20Sultana!5e0!3m2!1ses-419!2sco!4v1621263312868!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    responsiveTester("responsive-tester");      
    searchFilters(".card-filter",".card");     
    draw("#winner-btn",".player");    
    slider();
    scrollSpy();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball",".stage")
})
