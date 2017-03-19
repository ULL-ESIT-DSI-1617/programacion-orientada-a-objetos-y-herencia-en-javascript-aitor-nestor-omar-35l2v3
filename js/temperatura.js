function Temperatura(val, unit) {
    Medida.call(this, val, unit)
  };
  Temperatura.prototype = new Medida();               //Tipo de herencia mediante prototipo
  Temperatura.prototype.contructor = Temperatura;

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
