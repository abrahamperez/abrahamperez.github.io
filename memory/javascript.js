$(document).ready(function(){
  var click_count=0;
  var first_guess=0;
  var second_guess=0;
  var first_card=0;
  
  
  var card_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"]
for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  
  $("div.card"). click(function(){
    var mynum=0;
    var firstcard,secondcard;
    $(this).find('p').css("opacity","1");
    if(!onfirstclick){
      //compare cards
    }else{
    firstcard=$(this).find('p').html
  }
    
  });
  });
