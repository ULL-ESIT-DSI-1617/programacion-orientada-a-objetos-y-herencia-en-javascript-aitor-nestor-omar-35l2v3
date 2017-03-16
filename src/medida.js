/**
 * Created by chinegua on 16/3/17.
 */


class Medida {
    constructor(x) {

        let aux = x.toString();
        aux = aux.split(" "); // Guardamos en variable string para poder hacer el split

        //----------------- GUARDAMOS EN VARIABLES DEL OBJETO
        this.val = aux[0];
        this.unit = aux[1];
        //-----------------


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
        this.val = x;
    }
}

let temperatura = '25 ºC'
let p = new Medida(temperatura);
console.log(p.get_val());
console.log(p.get_unit());

