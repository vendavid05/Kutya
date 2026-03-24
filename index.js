import { megjelenit } from "./kartya.js"
import Kutya from "./Kutya.js"

const kutya = {
    kep:"kutya.png",
    nev:"Morzsi",
    oltott:true
}

const szuloELEM=document.querySelector(".tarolo")



const dog =new Kutya(kutya,szuloELEM)
console.log(dog)
//dog.megjelenit()
console.log(dog.szuloELEM)
console.log(dog.obj)
console.log(dog.getObj())

const kutya2={
    kep:"szemes.jpg",
    nev:"szemes"

}

const dog2=new Kutya(kutya2,szuloELEM)

dog2.setObj("oltott")