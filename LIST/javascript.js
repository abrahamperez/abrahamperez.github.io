$(document).ready(function(){
  $('#add').on('click', function(){//add item
    var items=$('input').val();
    $("div").append('<p>'+items+'</p>');
  });
  $("#remove").on('click', function(){//remove item
    var item=$('input').val();
    $('div').empty();
  });
}
)
