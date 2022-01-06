class Infoview{
    constructor(){
        this.jatekvegeElem=$(".jatekvege");
        this.kovetkezoJatekosElem=$(".kovetkezoJatekos");
    }
    setJatekVege(ertek){
        this.jatekvegeElem.html(ertek);
    }
    setkovetkezoJatekos(ertek){
        this.kovetkezoJatekosElem.html(ertek);
    }
    
}