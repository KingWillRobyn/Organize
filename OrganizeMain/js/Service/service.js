$(document).ready(function(){

  $.ajax({
        url:'https://talaikis.com/api/quotes/random',
        dataType:'json',
        success: function(results){
           console.log(results);
           var quote = results.quote;
           console.log(quote);;
             $('#daily').append(quote);
      }
    });





  

});
