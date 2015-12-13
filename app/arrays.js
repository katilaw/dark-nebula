exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var index = 0
    while (arr.indexOf(item) !== -1) {
      index = arr.indexOf(item);
      arr.splice(index, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var new_array = arr1.concat(arr2);
    return new_array;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i = 0; i <arr.length; i++) {
      if (arr[i] === item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates : function(arr) {
   var sort_arr = arr.sort();
   var results = [];
   for (var i = 0; i < sort_arr.length - 1; i++) {
    if (sort_arr[i] === sort_arr[i + 1]) {
      results.push(sort_arr[i]);
    }
   }
   for (var i = 0; i < results.length - 1; i++) {
    if (results[i] === results[i + 1]) {
      results.splice(i, 1);
    }
   }
   return results;
  },

  square : function(arr) {
    var results = []
    for (var i = 0; i < arr.length; i++) {
      results.push(arr[i] * arr[i]);
    }
    return results;
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === target) {
        results.push(i);
      }
    }
    return results;
  }
};
