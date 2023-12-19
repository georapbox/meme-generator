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
    ctx.font = `${item.fontWeight} ${item.fontSize}px ${item.font}`;

    const multiplier = index + 1;
    const lineHeight = ctx.measureText('M').width + item.fontSize / 2;
    const xPos = canvas.width / 2;
    const shadowBlur = item.shadowBlur;
    const text = item.allCaps === true ? item.text.toUpperCase() : item.text;
    const textLines = text.split('\n');

    ctx.fillStyle = item.fillColor;
    ctx.textAlign = item.textAlign;
    ctx.save();

    if (shadowBlur !== 0) {
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowColor = item.shadowColor;
    }

    if (item.rotate) {
      ctx.translate(xPos + item.offsetX, lineHeight * multiplier + item.offsetY);
      ctx.rotate(item.rotate * Math.PI / 180);
      textLines.forEach((text, index) => ctx.fillText(text, 0, index * lineHeight));
      ctx.rotate(-(item.rotate * Math.PI / 180));
      ctx.translate(-(xPos + item.offsetX), -(lineHeight * multiplier + item.offsetY));
    } else {
      textLines.forEach((text, index) => {
        ctx.fillText(text, xPos + item.offsetX, index * lineHeight + lineHeight * multiplier + item.offsetY);
      });
    }

    ctx.restore();
  });
};