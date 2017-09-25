function cssLoaded() {

  display_css_properties_of('.container_to_inspect', '#display_1', ["display", "justify-content", "flex-wrap", "overflow"]);
  display_css_properties_of('.element_to_inspect', '#display_2', ["width", "flex-shink", "margin-left", "margin-right"]);
}


function display_css_properties_of(to_inspect, display, list_of_props) {
  var s1 = "";
  list_of_props.forEach(function(key) {
    s1 += key + ": " +  ($(to_inspect).css(key) || 0) + ";<br>\n";
  })
  $(display).html(s1);
}      


function set_flex_css(no, callback) {
  let filename = 'flexbox_files/flex' + no + '.css';
  $('#flex_sheet').attr({'href': filename});

  let img = document.createElement('img');
  img.onerror = function(){  
    console.log("stylesheet was loaded!");
    callback();
  };
  img.src = filename;
}