$(document).ready(function() {
$('body').css('display', 'none');
$('body').fadeIn(1000);

setTimeout(function() {
  window.location.href = $next_page;
  $('body').fadeOut(1000);
}, $display_time);

});