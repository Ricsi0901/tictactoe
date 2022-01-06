class Kiertekeles{
    constructor(tomb){
        this.tomb=tomb;
        console.log(this.tomb);
    }
    getVizszintes(){
        let ellX="";
        this.tomb.forEach((element,index) => {
            ellX+=element.ertek;
            if(index%3==2){
                ellX+="@";
            }
        });
       
        return ellX;
        console.log(ellX)
    }
    getAtlo(){
        let ell=this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek+"@";
        ell+=this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek;
        let allapot="";
        return ell;
        

        }
    getFuggoleges(){
        let ell="";
        for (let index = 0; index < 3; index++) {
            ell+=this.tomb[index].ertek+this.tomb[index+3].ertek+this.tomb[index+6].ertek;
            ell+="@";
            
        }
        
       
        return ell;
    }

    ellenorzes(){
        let ell=this.getVizszintes()+"@"+this.getAtlo()+"@"+this.getFuggoleges();
        let allapot="";
        
        if(ell.indexOf("XXX")>=0){
            allapot="X";
        }
        else if(ell.indexOf("OOO")>=0){
            allapot="O";
        }
        return allapot
    }
    
}