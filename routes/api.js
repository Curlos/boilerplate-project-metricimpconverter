/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      console.log(req.query);
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      if(initNum == 'invalid number' && initUnit == 'invalid unit') {
        res.json("invalid number and unit")
      } 
      if(initNum == 'invalid number' && initUnit != 'invalid unit') {
        res.json("invalid number")
      } 
      if(initNum != 'invalid number' && initUnit == 'invalid unit') {
        res.json("invalid unit")
      } 
      
      res.json({ 
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: toString 
        })
    });
    
};
