/**
 * Created by chinegua on 18/3/17.
 */


"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
class celsius {
    constructor() {

        var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

        aux = x.toString();
        // aux = aux.split(" "); // Guardamos en variable string para poder hacer el split

        var aux = aux.match(regexp);
        console.log(aux);

        //----------------- GUARDAMOS EN VARIABLES DEL OBJETO
        this.val = aux[1];
        this.unit = aux[2];
        //-----------------


    }
    calculate(){
        console.log("Hola");
        converted.innerHTML = "Hola";
    }

    get_val(){
        let val = this.val;
        return val.toString();
    }

    set_val(x){
        this.val = x;
    }
    get_unit(){
        let unit = this.unit;
        return unit.toString();
    }

    set_unit(x){
        this.unit = x;
    }
}
