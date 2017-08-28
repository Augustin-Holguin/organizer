$(document).ready(function(){

  $('li').on('click', function(){
    $('li').remove();
  })

  $('h1').animate({'font-size': '12em'}, 400).animate({'font-size': '4em'}, 800);

})
