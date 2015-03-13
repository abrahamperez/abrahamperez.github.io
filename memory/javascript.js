$(document).ready(function(){
  var click_count=0;
  var first_guess=0;
  var second_guess=0;
  var first_card=0;//these are variables that will compare the numbers
  var card_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"];
  function suffle(array){
    var currentindex=array.length,temporaryvalue,randomindex;
    //shuffles elements...
    while(0 !==currentindex){
      //picks a remainging element
      randomindex= Math.floor(Math.random() * currentindex):
      currentindex-=1;
    }
  }
for(i in card_array){//this is the numbers that will appear on each card
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
