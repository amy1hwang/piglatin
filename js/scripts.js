pigLatin = function(input) {
  if (input.search(/[^a-zA-Z\s]+/) != -1) {
    console.log("Alphabet letters");
    return "Enter only alphebat letters.";
  }
  var words = input.split(" ");
  //var pigLatinWordsArray = []
  // for (var i = 0; i < words.length; i++) {
  //   var word = words[i]
  //   var pigLatinWord = wordToPigLatin(words[i])
  //   pigLatinWordsArray.push(pigLatinWord);
  // }
  var pigLatinWordsArray = words.map(function(word) {
    return wordToPigLatin(word);
  });
  var pigLatinSentence = pigLatinWordsArray.join(" ");
  return pigLatinSentence;
}

var wordToPigLatin = function (word){
  console.log("Pig Latin Function");
  var letters = word.split("");
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var firstLetter = letters[0];
  var shiftedLetters = "";

 if (vowels.indexOf(firstLetter) != -1 && firstLetter != "y"){
    console.log("Ay");
     letters.push("ay");
     return letters.join("");
  } else {
    console.log("Our Code");
    //--old code---//
    // check if letter is a vowel
    var isVowel = function(letter, position) {
      if (position == 0 && letter == "y") {
        return false
      }
      // check if letter is aouyi
      for(var v = 0; v <= vowels.length-1; v++) {
        if (letter == vowels[v]) {
          return true
        }
      }
    }
    var uFollowedByQ = function(letter, nextLetter) {
      if (letter === "q" && nextLetter === "u") {
        return true
      }
    }
    clusterFunction = function() {
      for(var i = 0; i <= letters.length-1; i++) {
        // first, see if letter is a vowel
        var letter = letters[i];
        var nextLetter = letters[i+1];
        console.log("Checking letter", letter);
        // if q followed by u, slice upt o u, not q
        if (uFollowedByQ(letter, nextLetter)) {
          console.log("u Followed by Q");
          return letters.slice(0, i+2).join("");
        }
        // normally: if we hit a vowel, return string up to the vowel.
        // yuji -> stop at u and return y.
        if (isVowel(letter, i)) {
          console.log("is vowel");
          return letters.slice(0, i).join("");
        }
      }
    }
    var consonants = clusterFunction();
    console.log(consonants)
    var remainingLetters = letters.slice(consonants.length, letters.length);
    console.log(remainingLetters);
    return remainingLetters.join("") + consonants + "ay";

    //--new code -- //
    // for (var i=0; i < letters.length; i++){
    //   if (vowels.indexOf(letters[i]) == -1){
    //     console.log(letters[i]);
    //     cluster.shift(letters[i]);
    //     console.log(cluster)
    //   }else {
    //     break;
    //   }
    };
  };

// what we have working is: a single word can be converted to pig Latin
// therefore you can just send individual words to your working pig latin function,
// then join them together.

$(document).ready(function(){
    $("form").submit(function (event){
      event.preventDefault();
      var input = $("#input").val();
      $(".output").text(pigLatin(input));
    });
});
