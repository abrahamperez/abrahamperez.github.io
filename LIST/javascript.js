$(document).ready(function(){
  $('#add').on('click', function(){
    var items=$('input').val();
    $("div").append('<p>'+items+'</p>')
  });
  
