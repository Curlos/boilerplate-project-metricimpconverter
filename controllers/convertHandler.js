/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('mathjs');
const UNITS = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

function printRatio (value) {
  return math.format(value, { fraction: 'decimal' })
}


function ConvertHandler() {

  
  this.getNum = function(input) {

    let numRegex = /^\d+\.?\/?\d*\/?\d*\.?\d*/
    let result = input.match(numRegex);

    if(result == null) {
      return "invalid number";
    }

    if(input.match(/\d/) == null) {
      return 1;
    }

    result = math.evaluate(result)[0];
    console.log(result)
    
    return result;
  };
  
  this.getUnit = function(input) {
    let unitRegex = /[a-zA-Z]+/
    let result = input.match(unitRegex);
    result = result[0];

    if(result == 'l' || result == 'L') {
      return result.toUpperCase();
    }

    if(UNITS.includes(result) == false) {
      return "invalid unit"
    }
    
    return result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case 'gal':
        return 'L'
      case 'L':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
    }
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit) {
      case 'gal':
        return parseFloat((initNum * galToL).toFixed(5));
      case 'L':
        return parseFloat((initNum / galToL).toFixed(5));
      case 'lbs':
        return parseFloat((initNum * lbsToKg).toFixed(5));
      case 'kg':
        return parseFloat((initNum / lbsToKg).toFixed(5));
      case 'mi':
        return parseFloat((initNum * miToKm).toFixed(5));
      case 'km':
        return parseFloat((initNum / miToKm).toFixed(5));
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let fullInitUnit = '';
    let fullReturnUnit = '';

    switch(initUnit) {
      case 'gal':
        fullInitUnit = 'gallons';
        fullReturnUnit = 'liters';
        break;
      case 'L':
        fullInitUnit = 'liters';
        fullReturnUnit = 'gallons';
        break;
      case 'lbs':
        fullInitUnit = 'pounds';
        fullReturnUnit = 'kilograms';
        break;
      case 'kg':
        fullInitUnit = 'kilograms';
        fullReturnUnit = 'pounds';
        break;
      case 'mi':
        fullInitUnit = 'miles';
        fullReturnUnit = 'kilometers';
        break;
      case 'km':
        fullInitUnit = 'kilometers';
        fullReturnUnit = 'miles';
        break;
    }

    return `${initNum} ${fullInitUnit} converts to ${returnNum} ${fullReturnUnit}`;
  };
  
}

module.exports = ConvertHandler;
