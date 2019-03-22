var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([78.481522,17.385044]),
    zoom: 15
  })
});

//smooth scolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#navbar a, .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -100
      }, 700,);
    } // End if
  });
});


window.addEventListener('scroll', function(){
  if( window.scrollY > 150){
    document.querySelector('#navbar').style.opacity=0.9
  }

});