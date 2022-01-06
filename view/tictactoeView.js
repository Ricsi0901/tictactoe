class Elem{
    constructor(szuloelem){
        this.node=szuloelem;
        szuloelem.append("<div><p></p></div");
        this.elem=this.node.children("div:last");
        this.aktiv=true;
        this.ertek="$";
        this.pElem=this.elem.children("p");
        this.elem.on("click",()=>{
            if(this.aktiv){
           this.kattintastrigger();
           this.aktiv=false;
            }
        })

    }
    setElem(ertek){
        this.ertek=ertek
        this.pElem.html(ertek);
    }
    kattintastrigger(){
        
        let esemeny=new CustomEvent("kivalasztva",{detail:this});
        window.dispatchEvent(esemeny);
    }
}
class jatekter{
    constructor(tomb){
        const szuloelem=$("article")
        for (let i = 0; i < 9; i++) {
            const elem=new Elem(szuloelem);
            //elem.setElem("X")
            tomb.push(elem);

        }
        
        
    }
}