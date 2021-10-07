registerPaint('slanted-bg', class {

  static get inputProperties() {
    return [
      '--slanted-width',
      '--slanted-main-color',
      '--slanted-second-color'
    ]
  }

  paint (ctx, geom, properties, args) {
    let sw = properties.get('--slanted-width').toString().replace('px', '');
    sw = sw || 30;
    let maincolor = properties.get('--slanted-main-color').toString();
    let secondcolor = properties.get('--slanted-second-color').toString();

    // draw random colors
    ctx.fillStyle = maincolor;
    this.hue += 10;

    ctx.beginPath();
    ctx.moveTo(sw, 0);
    ctx.lineTo(geom.width, 0);
    ctx.lineTo(geom.width - sw, geom.height);
    ctx.lineTo(0, geom.height);
    ctx.fill();

    ctx.globalCompositeOperation = 'source-atop';

    ctx.fillStyle = secondcolor;
    ctx.beginPath();
    ctx.moveTo(0, geom.height);
    ctx.lineTo(geom.width, geom.height - 8);
    ctx.lineTo(geom.width, geom.height);
    ctx.fill();
  }
})