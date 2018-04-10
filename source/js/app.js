
$(function() {
  $(document).ready(initMap)
  $(document).on('page:load', initMap)
  function calcVH() {
    $('.section.hero').innerHeight( $(this).innerHeight() );
  }
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.86303047, lng: 23.96383548},
      zoom: 16,
      disableDefaultUI: true,
      scrollwheel:  false,
      zoomControl: false,
    })
  }
   calcVH();
});
