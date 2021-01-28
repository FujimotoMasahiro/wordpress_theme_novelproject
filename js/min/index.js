$(function(){
    $('.opening').css({display:'block'});
    $('.opening').click(function(){
      $(this).fadeOut();
    });
    $( '.opening ul' ).on( 'click', function( e ){
      e.stopPropagation();
    } );
  
    $('li.opening_close a').on('click',function(){
      $('.opening').fadeOut();
    });
  });
  
  $(function(){
    if(jQuery.cookie("access")){
      $('.opening').css({display:'none'});
    }
    $(window).on('load', function(){
      jQuery.cookie("access",$('body').addClass('access'));
      var date = new Date();
      date.setTime(date.getTime() + (24*60*60*1000));
      jQuery.cookie("access", "24hour", {expires: date});
    });
  });
  