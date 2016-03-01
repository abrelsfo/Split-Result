'use strict';
module.exports = function(){
  function findShortest(arr){
    var lowest = arr[0].length;
    for (var i = 1; i < a.length; i++) {
      if (a[i].length < lowest) lowest = i;
    }
    return lowest;
  };

  var shortest = findShortest(arguments);
  var new_arr = [];
  var tmp_arr = [];

  for (var i = 0; i < shortest; i++){
    for var j = 0; j < arguments.length; j++) {
      tmp_arr.push(arguments[j][i]);
    }
    new_arr.push(tmp_arr);
    tmp_arr = [];
  }

  return new_arr;
};
