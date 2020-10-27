/*!
Deck JS - deck.fullscreen - v1.0
Copyright (c) 2020 Brigitte Jellinek
*/

/*
This module adds the necessary methods and key bindings to 
switch your slideshow to fullscreen.  Built for http://web-development.github.com/
*/
(function($, deck, undefined) {
  var $d = $(document);
  
  
  $d.bind('deck.init', function() {
    // Bind key events
    console.log("init: bind keydown.f")
    $d.unbind('keydown.fullscreen').bind('keydown.fullscreen', function(e) {
      console.log("key", e.which);
      if (e.which == 70) {  // letter f
        var body = document.querySelector('body');

        function toggleFullScreen() {
          console.log('toggleFullScreen()', body);
          if (!document.fullscreenElement) {
            console.log("go fullscreen");
            body.requestFullscreen();
          } else {
            console.log("exit fullscreen");
            if (document.exitFullscreen) {
              document.exitFullscreen(); 
            }
          }
        }

        toggleFullScreen();
      }
    });
  });
})(jQuery, 'deck');

