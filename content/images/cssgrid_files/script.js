function insert_stylesheet_link(path,display) {
  let filename = path.replace('cssgrid_files/','');
  let h = "Stylesheet <a href='" + path + "'>" + filename + "</a>";
  console.log(`inserting html ${h} into ${display}`);
  $(display).html(h);

}

function cssLoaded() {
  display_css_properties_of('.page_container', '#show_css', ["display","grid-template-columns", "grid-template-rows", "grid-template-areas"]);
  let path = $('#grid_sheet').attr('href');
  insert_stylesheet_link(path, '#show_name');
}


function display_css_properties_of(to_inspect, display, list_of_props) {
  var s1 = "";
  list_of_props.forEach(function(key) {
    let v = ($(to_inspect).css(key) || 0);
    if ( v.match(/"/) ) { v = v.replace(/" "/g, '"<br>"'); }
    s1 += "<b>" + key + ":</b> " +  v + ";<br>\n";
  })
  $(display).html(s1);
}


function set_css(name, callback, display) {
  let filename =  name + '.css';
  let path = 'cssgrid_files/' + filename;
  $('#grid_sheet').attr({'href': path});

  let img = document.createElement('img');
  img.onerror = function(){
    console.log(`stylesheet ${filename} was loaded !`);
    insert_stylesheet_link(path, display);
    callback();
  };
  img.src = filename;
}