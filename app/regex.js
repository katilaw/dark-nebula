exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var re = new RegExp(/\d/);
    if (str.match(re)) {
      return true;
    }
    else {
      return false;
    }
  },

  containsRepeatingLetter : function(str) {
    var re = new RegExp(/([a-zA-Z]).*?\1/i);
    if ( str.match(re)) {
      return true;
    }
    else {
      return false;
    }
  },

  endsWithVowel : function(str) {
    // var matches = str.match(/[aeiou]$/i);
    var re = new RegExp(/[aeiou]$/i);
    if (str.match(re)) {
      return true;
    }
    else {
      return false;
    }
  },

  captureThreeNumbers : function(str) {
    var re = new RegExp(/\d{3}/);

    if (str.match(re)) {
      return str.match(re)[0];
    }
    else {
      return false;
    }
  },

  matchesPattern : function(str) {
    var re = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)

    if (str.match(re)) {
      return true;
    }
    else {
      return false;
    }
  },

  isUSD : function(str) {
    var re = new RegExp(/(?=.)^\$(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{2})?$/)

    if (str.match(re)) {
      return true;
    }
    else {
      return false
    }
  }
};
