/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    let numRegex = /\d*[.]?\d+/;
    let fracRegex = /^\d+([.]\d+)?\/\d+/;
    let badFracRegex = /\d+([.]\d+)?\/\d+([.]\d+)?\/\d+/
    let unitOnlyRegex = /^[a-z]/i;
    
    if(unitOnlyRegex.test(input)){
      let result = 1;
      return result;
    }
    
    else if(badFracRegex.test(input)){
      result = 'invalid number';
      return result;
    }
    else if(fracRegex.test(input)){
      result = input.match(fracRegex);
      result = eval(result[0]);
      return result;
    }
    
    else if(numRegex.test(input)){
      result = input.match(numRegex);
      result = result.join('');
      return result;
    }
    else{
      result = 'invalid number';
      return result;
    }
  };
  
  this.getUnit = function(input) {
    var result;
    let charRegex = /[a-z]/gi;
    var useable = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
  
    result = input.match(charRegex);
    result = result.join('');
    
    for(let i =0;i<useable.length;i++){
      if(result == useable[i]){
        return result;
      }
    }
   result = 'invalid unit';
   return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit == 'invalid unit'){
      return initUnit;
    }
    var result;
    var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var expect = ['l','gal','km','mi','kg','lbs','L','GAL','KM','MI','KG','LBS'];
    let index = input.indexOf(initUnit)
    result = expect[index].toLowerCase();
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['Gallon','Litre','Mile','Kilometer','Pounds','Kilogram'];
    let index = input.indexOf(unit);
    result = expect[index];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if(initUnit == 'invalid unit'){
      return result = initUnit;
    }
    initUnit = initUnit.toUpperCase(); 
    switch (initUnit){
      case 'L':
        result = initNum / galToL;
        break;
      case 'GAL':
        result = initNum * galToL;
        break;
      case 'LBS':
        result = initNum * lbsToKg;
        break;
      case 'KG':
        result = initNum / lbsToKg;
        break;
      case 'MI':
        result = initNum * miToKm;
        break;
      case 'KM':
        result = initNum / miToKm;
        break;
      default:
        break;
  }
    result = parseFloat(result.toFixed(5));
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(initNum ==  'invalid number' && initUnit != 'invalid unit'){
      result = 'invalid number';
      return result;
    }
    else if(initNum !== 'invalid number' && initUnit == 'invalid unit'){
      result = 'invalid unit';
      return result;
    }
    else if(initNum == 'invalid number' && initUnit == 'invalid unit'){
      result = 'invalid number and invalid unit';
      return result;
    }
    
    initNum = initNum.toString();
    returnNum = returnNum.toString();
   let longInit = this.spellOutUnit(initUnit);
   let longReturn = this.spellOutUnit(returnUnit);
    var result = `${initNum} ${longInit}s is equivalent to ${returnNum} ${longReturn}s`;
    return result;
  };
  
}

module.exports = ConvertHandler;
