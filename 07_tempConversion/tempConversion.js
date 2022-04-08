const ftoc = function(fTemp) {
let cTemp = (fTemp - 32) * 5 / 9;
cTemp = Math.round(cTemp * 10) / 10;
cTemp = cTemp.toFixed(1);
return +cTemp;
};

const ctof = function(cTemp) {
let fTemp = cTemp * 9 / 5 + 32;
fTemp = Math.round(fTemp * 10) / 10;
fTemp = fTemp.toFixed(1);
return +fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
