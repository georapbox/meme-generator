import { fabric } from 'fabric';

export const drawCanvas = (image, canvas, ctx, textOptions = []) => {
  if (image == null) {
    return;
  }

  canvas.clear();

  if (typeof image === 'string') { // Assume it's a color
    canvas.add(new fabric.Rect({
      left: 0,
      top: 0,
      width: canvas.width,
      height: canvas.height,
      fill: image
    }));
  } else {
    canvas.add(
      new fabric.Image(image, {
        left: 0,
        top: 0,
        width: canvas.width,
        height: canvas.height,
        selectable: false
      })
    );
  }

  textOptions.forEach(function (item, index) {
    console.log('DRAW');

    if (item._instance) {
      item._instance.set('text', item.allCaps === true ? item.text.toUpperCase() : item.text);
      item._instance.set('top', item._instance.top || item._instance.height * index);
      item._instance.set('left', item._instance.left || canvas.width / 2);
      item._instance.set('originX', item._instance.originX || 'center');
      item._instance.set('fontFamily', item.font);
      item._instance.set('fontSize', canvas.width / 20);
      item._instance.set('fontWeight', item.fontWeight);
      item._instance.set('fill', item.fillColor);
      item._instance.set('stroke', item.borderWidth === 0 ? null : item.strokeColor);
      item._instance.set('strokeWidth', item.borderWidth);

      canvas.add(item._instance);
    }
  });
};
