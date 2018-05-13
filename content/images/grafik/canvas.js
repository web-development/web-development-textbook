const w = 770,
  h = 50;

function draw(my_context) {
  let x = 0,
    y = 0;
  my_context.moveTo(0, 0);
  while (x < w) {
    y = y == 0 ? h : 0;
    x += h;
    my_context.lineTo(x, y);
  }
  my_context.stroke();
}

function init(id) {
  let my_canvas = document.getElementById(id);
  if (!my_canvas) {
    console.log("could not find canvas ", id);
    return;
  }
  let my_context = my_canvas.getContext("2d");

  my_canvas.width = w;
  my_canvas.height = h;

  return my_context;
}

function retina_init(id) {
  let my_canvas = document.getElementById(id);
  if (!my_canvas) {
    console.log("could not find canvas ", id);
    return;
  }
  let my_context = my_canvas.getContext("2d");

  let ratio = window.devicePixelRatio;

  my_canvas.width = w * ratio;
  my_canvas.height = h * ratio;

  my_canvas.style.width = `${w}px`;
  my_canvas.style.height = `${h}px`;
  my_context.scale(ratio, ratio);

  return my_context;
}

let my_context;

my_context = init("c1");
draw(my_context);

my_context = retina_init("c2");
draw(my_context);

my_context = retina_init("c3");
my_context.font = "bold 12px sans-serif";
my_context.fillText("hier bin ich", 30, 50);

my_context = retina_init("c4");
draw(my_context);

my_context = retina_init("c5");
let image = document.getElementById("the_img_tag");
for (let x = 0; x < 700; x += 110) {
  y = -17 * Math.random();
  my_context.drawImage(image, x, y);
}
