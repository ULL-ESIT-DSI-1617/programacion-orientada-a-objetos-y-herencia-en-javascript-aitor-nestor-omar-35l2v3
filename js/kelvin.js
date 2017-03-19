"use strict";
class Kelvin extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Kelvin a Celsius
        let self = super.get_val();
        let k2c = self - 273.15;
        return k2c;
    }

    toKelvin(){
        return super.get_val();
    }

    toFahrenheit(){                       //Paso de Kelvin a Fahrenheit
        let self = super.get_val();
        let k2f = self * (9/5) - 459.67;
        return k2f;
    }
}
