$(document).ready(function(){
  for(i=0; i<20; i++){
    $('#card_holder').append('<div class="card"><p>'+i+'</p></div>');
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
