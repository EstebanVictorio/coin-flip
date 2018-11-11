var lcg = new LCG();

function flip(n){
  if(!(0 < n && n < 1000000)){
    throw Error('Non-Valid Number.');
  }
  lcg.setModulus(n);
  return lcg.getRand();
}

function LCG(){
  this.modulus = 0;
  this.multiplier = 510;
  this.increment = 1573;
  this.seed = 11292;
}

function setModulus(modulus){
  this.modulus = modulus;
}

function getRand(){
  console.log('('+this.multiplier +  ' x ' + this.seed + ' + ' + this.increment + ')' + ' % ' + this.modulus + ' =');
  this.seed = (this.multiplier * this.seed + this.increment) % this.modulus;
  console.log(this.seed);
  return this.seed;
}


LCG.prototype.setModulus = setModulus;
LCG.prototype.getRand = getRand;
