console.log("this is a slide show");
$(function() {
  if( typeof $.deck  == "function ") {
    console.log("i can do $.deck() immediately");
    $.deck(".slide");
  } else {
    console.log("i am doing $.deck() later");
    setTimeout( () => $.deck(".slide"), 200);
  }
});
