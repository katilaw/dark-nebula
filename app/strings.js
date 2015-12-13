exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split('');
    var new_str = [];

    for (var i = 0; i < str.length; i++) {
      count = 0
      if (str[i] === str[i+1]) {
        if (str[i] !== str[i-1]) {
          while (count < amount && str[i] == str[i+1]) {
            new_str.push(str[i]);
            count += 1;
          }
        }
      } else if (str[i] !== str[i-1] && str[i] !== str[i+1]) {
        new_str.push(str[i]);
      }
    }
    return new_str.join('');
   },

  wordWrap: function(str, cols) {
    var new_str = str.split(' ');
    for (var i = 0; i < str.length; i++){
      if (new_str[i].length < 3) {
        while ((new_str[i].length + new_str[i+1].length) < cols ) {
          var str2 = '';
          str2 += new_str[i];
          str2 += ' ';
          str2 += new_str[i+1];
          new_str.splice(i,2);
          new_str.unshift(str2);
        }
      }
      return new_str.join('\n')
    }
  },
  reverseString: function(str) {
    var str2 = '';
    for (var i = str.length - 1; i > -1; i--) {
      str2 += str[i];
    }
    return str2;
  }
};
