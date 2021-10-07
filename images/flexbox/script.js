function insert_stylesheet_link(filename) {
  let display = '#display_2';
  let h = "Stylesheet <a href='" + filename + "'>" + filename + "</a>";
  console.log(`inserting html ${h} into ${display}`);
  $(display).html(h);

}

function cssLoaded() {

  display_css_properties_of('.container_to_inspect', '#display_1', ["display", "justify-content", "flex-wrap", "overflow"]);
  display_css_properties_of('.element_to_inspect', '#display_2', ["width", "flex-shink", "margin-left", "margin-right"]);
  let path = $('#flex_sheet').attr('href');
  insert_stylesheet_link(path);
}


function display_css_properties_of(to_inspect, display, list_of_props) {
  var s1 = "";
  list_of_props.forEach(function(key) {
    s1 += key + ": " +  ($(to_inspect).css(key) || 0) + ";<br>\n";
  })
  $(display).html(s1);
}


function set_flex_css(no, callback) {
  let filename = 'flex' + no + '.css';
  $('#flex_sheet').attr({'href': filename});

  let img = document.createElement('img');
  img.onerror = function(){
    console.log("stylesheet was loaded!");
    insert_stylesheet_link(filename);
    callback();
  };
  img.src = filename;
}