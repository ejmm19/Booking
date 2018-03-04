$(document).ready(function() {
  var cont = 0;
  $("#icon-menu-movil").click(function(event) {
    event.preventDefault();
    if (cont==0) {
      $("#menu-movil").css({'left':'0%'});
      cont = 1;
    }else {
      $("#menu-movil").css({'left':'-100%'});
      cont = 0;
    }
  });
  $("#cerrar-nav-movil").click(function(event) {
    event.preventDefault();
    $("#menu-movil").css({'left':'-100%'});
    cont = 0;
  });
  $('.form_datetime').datetimepicker({
      language:  'es',
      weekStart: 1,
      todayBtn:  1,
  		autoclose: 1,
  		todayHighlight: 1,
  		startView: 2,
  		minView: 2,
  		forceParse: 0
      });

      $(window).scroll(function() {
        if($(window).scrollTop() > 500) {
          $("#nav-busqueda-sticky").css({'top':'0'});
        } else {
          $("#nav-busqueda-sticky").css({'top': '-77px'});
        }
      });

});
