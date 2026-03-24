export default class Kutya{
    #obj = {};
    constructor(obj={kep,nev},szuloELEM){

        //this.kev=obj.kep
        //this.nev=obj.nev
        //this.obj=obj;
        this.#obj=obj;
        this.szuloELEM=szuloELEM
        
        this.megjelenit()

        const buttonElem = document.querySelectorAll(".kartya button")
        buttonElem.addEventListener("click",function(event){
            console.log(event.target)
        })
    }
megjelenit(){
    let kod = `<div class="kartya">
            <img src=${this.#obj.kep} alt ="${this.#obj.nev}kutya">
            <p>${this.#obj.nev}</p>
        </div>
        <button>Kedvenc</button>
        `;

        this.szuloELEM.innerHTML +=kod



    }
    getObj(){
        return this.#obj
    }

    setObj(ertek){
        if (ertek === "oltott") {
         this.#obj.oltott=true ;
    }else if (ertek === "nem oltott"){
        this.#obj.oltott=false;
    }else { console.log("nem megfelelő az érték")
}
console.log(this.#obj)
    }
}
