$(document).ready(function(){
  $('button').on('click', function(){
    var items=$('input').val();
    $("div").append('<p>'+items+'</p>')
  });
})
