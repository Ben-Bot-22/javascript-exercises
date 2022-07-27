const ftoc = function(degrees) {
  //F to Celcius
  let cel = (degrees - 32) * (5/9);
  return Math.round(cel * 10) / 10
};

const ctof = function(degrees) {
  //C to Fereinheit
  let fer = degrees * (9/5) + 32;
  return Math.round(fer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
