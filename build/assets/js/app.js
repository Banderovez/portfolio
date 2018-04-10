
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoZnVuY3Rpb24oKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGluaXRNYXApXG4gICQoZG9jdW1lbnQpLm9uKCdwYWdlOmxvYWQnLCBpbml0TWFwKVxuICBmdW5jdGlvbiBjYWxjVkgoKSB7XG4gICAgJCgnLnNlY3Rpb24uaGVybycpLmlubmVySGVpZ2h0KCAkKHRoaXMpLmlubmVySGVpZ2h0KCkgKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgY2VudGVyOiB7bGF0OiA0OS44NjMwMzA0NywgbG5nOiAyMy45NjM4MzU0OH0sXG4gICAgICB6b29tOiAxNixcbiAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXG4gICAgICBzY3JvbGx3aGVlbDogIGZhbHNlLFxuICAgICAgem9vbUNvbnRyb2w6IGZhbHNlLFxuICAgIH0pXG4gIH1cbiAgIGNhbGNWSCgpO1xufSk7XG4iXX0=
