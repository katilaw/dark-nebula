exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    var result = false;
    if (num%2 !==0 && num%3 !==0) {
      result = true;
    }
    return result
  },

  arraySum : function(array) {
    var sum = 0;
    for (var i = 0; i< array.length; i++) {
      sum += array[i];
    }
    return sum;
  },

  fizzBuzz : function(num) {

    if (num%15 == 0) {
      return 'fizzbuzz';
    }
    else if (num%5 == 0 ) {
      return 'buzz';
    }
    else if (num%3 == 0) {
      return 'fizz';
    }
    else if (typeof(num) != 'number') {
      return false;
    }
    else {
      return num;
    }
  }
};
