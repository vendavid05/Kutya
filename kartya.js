export function megjelenit(obj = {kep,nev},szuloELEM){
    let kod = `<div class="kartya">
            <img src=${obj.kep} alt ="${obj.nev}kutya">
            <p>${obj.nem}</p>
        </div>`

        szuloELEM.innerHTML=kod


}
