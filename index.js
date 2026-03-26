import { megjelenit } from "./kartya.js"
import Kutya from "./Kutya.js"
import { KUTYALISTA } from "./adat.js"

import Kutyak from "./Kutyak.js"


const szuloELEM=document.querySelector(".tarolo")
const kedvencElEM=document.querySelector(".kedvenc")


new Kutyak(KUTYALISTA,szuloELEM)


const KEDVENCLISTA=[]

window.addEventListener("kedvenc",function(event){
    console.log(event.detail)
    KEDVENCLISTA.push(event.detail)
    new Kutyak(KEDVENCLISTA,kedvencElEM)
})