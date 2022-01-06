class TTTController{
    constructor(){
        const tomb=[];
       new jatekter(tomb);
       const info=new Infoview();
       const kiertekel=new Kiertekeles(tomb);
       this.lepes=0;
       $(window).on("kivalasztva",(event)=>{
           
           let aktelem=event.detail;
           if(this.lepes%2===0){
           aktelem.setElem("X")
           info.setkovetkezoJatekos("kövezkező: O")
           }
           else{
            aktelem.setElem("O")
            info.setkovetkezoJatekos("kövezkező: X")
            }
            this.lepes++;
        if(kiertekel.ellenorzes()==="X"){
            info.setJatekVege("X nyert")
            this.jatekVege(tomb);
        }else if(kiertekel.ellenorzes()==="O"){
            info.setJatekVege("O nyert")
            this.jatekVege(tomb);
        }else if(this.lepes===9){
            info.setJatekVege("Dontetlen")
            this.jatekVege(tomb);
        }
       })
       
    }
    jatekVege(tomb){
        tomb.forEach(element => {
            info.setkovetkezoJatekos("Vége");
            element.aktiv=false;
            
        });
    }
}