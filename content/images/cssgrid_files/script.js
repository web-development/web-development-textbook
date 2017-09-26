function cssLoaded() {
  display_css_properties_of('.page_container', '#show', ["display","grid-template-columns", "grid-template-rows", "grid-template-areas"]);
}


function display_css_properties_of(to_inspect, display, list_of_props) {
  var s1 = "";
  list_of_props.forEach(function(key) {
    s1 += "<b>" + key + "</b>: " +  ($(to_inspect).css(key) || 0) + ";<br>\n";
  })
  $(display).html(s1);
}      


function set_css(no, callback) {
  let filename = 'cssgrid_files/grid' + no + '.css';
  $('#grid_sheet').attr({'href': filename});

  let img = document.createElement('img');
  img.onerror = function(){  
    console.log(`stylesheet ${filename} was loaded !`);
    callback();
  };
  img.src = filename;
}