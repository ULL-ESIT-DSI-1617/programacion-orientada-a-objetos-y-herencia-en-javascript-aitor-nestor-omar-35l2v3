"use strict";
class Temperatura extends Medida{
    constructor(x){
        super(x)
    }

    get_val(){
        let val = super.val;
        return val.toString();
    }

    set_val(x){
        super.val = x;
    }
    get_unit(){
        let unit = super.unit;
        return unit.toString();
    }

    set_unit(x){
        super.unit = x;
    }
}
