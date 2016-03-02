'use strict';
module.exports = function(arr){
  function findExtremes(arr){
    var lowest = arr[0].length;
    var highest = arr[0].length;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length < lowest) lowest = arr[i].length;
      if (arr[i].length > highest) highest = arr[i].length;
    }

    return {'lowest': lowest, 'highest': highest};
  };

  function short(arr, shortest){
    var new_arr = [];
    var tmp_arr = [];

    for (var i = 0; i < shortest; i++){
      for (var j = 0; j < args.length; j++) {
        tmp_arr.push(args[j][i]);
      }
      new_arr.push(tmp_arr);
      tmp_arr = [];
    }
    return new_arr;
  };

  function lng(arr, longest){
    var new_arr = [];
    var tmp_arr = [];

    for (var i = 0; i < longest; i++){
      for (var j = 0; j < arr.length; j++) {
        if (i < arr[j].length){
          tmp_arr.push(arr[j][i]);
        }
      }
      new_arr.push(tmp_arr);
      tmp_arr = [];
    }
    return new_arr;
  };

  var start = 0;
  var args = [];
  var singleFlag = 0;

  for (var key in arguments) {
    if (arguments[key] === true && singleFlag === 0) {
      singleFlag = 1;
      start = 1
    } else if (!Array.isArray(arguments[key]) && (typeof arguments[key] !== 'boolean')) {
      throw new TypeError('arrzip expects Arrays and optional boolean, got "' + arguments[key] + '" type: ' + (typeof arguments[key]));
    } else if (!Array.isArray(arguments[key]) && singleFlag === 1) {
      throw new Error('arrzip expects 0 or 1 flag, got more');
    } else if (arguments[key] === false){
      continue
    } else {
      args.push(arguments[key]);
    }
  };

  var extremes = findExtremes(args.slice(0, args.length));

  if (!start) return short(args, extremes.lowest);
  else return lng(args, extremes.highest);
};
