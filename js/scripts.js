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

alert(sentence);
