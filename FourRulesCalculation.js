const fourRulesCalculation = {
  plus: function plus(a,b) {
    return a + b;
  },
  minus: function minus(a,b) {
    return a - b;
  },
  mul: function mul(a,b) {
    return a * b;
  },
  div: function div(a,b) {
    return a / b;
  }
}

console.log(fourRulesCalculation.plus(10,10));
console.log(fourRulesCalculation.minus(20,10));
console.log(fourRulesCalculation.mul(1,10));
console.log(fourRulesCalculation.div(100,10));
