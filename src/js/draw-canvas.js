export const drawCanvas = (image, canvas, ctx, textOptions = []) => {
  if (image == null) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (typeof image === 'string') { // Assume it's a color
    ctx.fillStyle = image;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  textOptions.forEach(function (item, index) {
    ctx.save();

    ctx.font = `${item.fontWeight} ${item.fontSize}px ${item.font}`;
    ctx.fillStyle = item.fillColor;
    ctx.textAlign = item.textAlign;
    ctx.strokeStyle = item.strokeColor;

    const multiplier = index + 1;
    const lineHeight = ctx.measureText('M').width + item.fontSize / 2;
    const xPos = canvas.width / 2;
    const shadowBlur = item.shadowBlur;
    const text = item.allCaps === true ? item.text.toUpperCase() : item.text;
    const textLines = text.split('\n');

    if (shadowBlur !== 0) {
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowColor = item.strokeColor;
    }

    ctx.translate(xPos + item.offsetX, lineHeight * multiplier + item.offsetY);
    ctx.rotate(item.rotate * Math.PI / 180);
    // first draw each line with shadow
    textLines.forEach((text, index) => ctx.fillText(text, 0, index * lineHeight));
    // since shadows of multiline text may be drawn over letters of neighbour lines
    // (when shadow blur is big enough), re-draw text without shadows.
    ctx.shadowBlur = 0;
    textLines.forEach((text, index) => ctx.fillText(text, 0, index * lineHeight));
    if (item.borderWidth > 0) {
      ctx.lineWidth = item.borderWidth;
      textLines.forEach((text, index) => ctx.strokeText(text, 0, index * lineHeight));
    }

    ctx.restore();
  });
};
