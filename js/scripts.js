/* $(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
*/
var sentence = prompt("Please type a sentence");
alert(sentence);
/*
function capFirst(string)
{
   sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
   return sentence;
};

alert(capFirst(sentence));


function capLast(string)
{
   sentence = sentence.slice(0, sentence.length -1) + sentence.charAt(sentence.length -1).toUpperCase();
   return sentence;
};


alert(capLast(sentence));
*/
function charAtEnd(string)
{
	 var last = sentence.charAt(sentence.length -1).toUpperCase();
   var first = sentence.charAt(0).toUpperCase();

   return sentence +last + first ;
};

alert(charAtEnd(sentence));

function midLet(string)
{
	 var last = sentence.charAt(sentence.length -1).toUpperCase();
   var first = sentence.charAt(0).toUpperCase();
   var index = sentence.charAt(Math.floor((sentence.length) / 2));



   return index + sentence +last + first ;
};

alert(midLet(sentence));


function reverse(string)
{
	 var last = sentence.charAt(sentence.length -1).toUpperCase();
   var first = sentence.charAt(0).toUpperCase();
   sentence = sentence.substring(1, sentence.length-1);

   return last + sentence + first ;
};

alert(reverse(sentence));
