import { isSolidColorSelected } from './utils/is-solid-color-selected.js';
import { MAX_SHADOW_BLUR_SIZE, MAX_STROKE_WIDTH, MAX_ROTATE } from './constants.js';

export class Canvas {
  #canvas = null;
  #ctx = null;

  constructor(canvasEl) {
    this.#canvas = canvasEl;
    this.#ctx = this.#canvas.getContext('2d');
  }

  get width() {
    return this.#canvas.width;
  }

  set width(value) {
    this.#canvas.width = value;
  }

  get height() {
    return this.#canvas.height;
  }

  set height(value) {
    this.#canvas.height = value;
  }

  getDimensions() {
    return {
      width: this.width,
      height: this.height
    };
  }

  setDimensions({ width, height }) {
    this.width = width;
    this.height = height;
    return this;
  }

  toDataURL() {
    return this.#canvas.toDataURL();
  }

  draw(image, textboxes = new Map()) {
    if (image == null) {
      return;
    }

    const canvas = this.#canvas;
    const ctx = this.#ctx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isSolidColorSelected(image)) {
      ctx.fillStyle = image;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }

    let multiplier = 0;

    textboxes.forEach(textbox => {
      const { data } = textbox;

      multiplier += 1;

      ctx.save();

      ctx.font = `${data.fontWeight} ${(data.fontSize * canvas.width) / 1000}px ${data.font}`;
      ctx.textAlign = data.textAlign;
      ctx.strokeStyle = data.strokeColor;

      const xPos = canvas.width / 2;
      const shadowBlur = data.shadowBlur;
      const text = data.allCaps === true ? data.text.toUpperCase() : data.text;
      const textLines = text.split('\n').filter(line => line.trim() !== '');
      const textMetrics = ctx.measureText(textLines[0]);
      const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
      const bgOffset = data.textBackgroundEnabled ? textHeight / 4 : 0;
      const lineHeight = textHeight + data.fontSize / 4 + bgOffset;

      ctx.translate(xPos + data.offsetX, lineHeight * multiplier + data.offsetY);
      ctx.rotate((Math.min(data.rotate, MAX_ROTATE) * Math.PI) / 180);

      if (data.textBackgroundEnabled) {
        ctx.fillStyle = data.textBackgroundColor;
        textLines.forEach((line, index) => {
          if (line) {
            const textMetrics = ctx.measureText(line);
            const textWidth = textMetrics.width;
            const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
            const xOffset = data.textAlign === 'left' ? 0 : data.textAlign === 'right' ? -textWidth : -textWidth / 2;

            ctx.fillRect(
              xOffset - bgOffset,
              index * lineHeight - textHeight - bgOffset,
              textWidth + bgOffset * 2,
              textHeight + bgOffset * 2
            );
          }
        });
      }

      ctx.save();
      if (shadowBlur !== 0) {
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = Math.min(shadowBlur, MAX_SHADOW_BLUR_SIZE);
        ctx.shadowColor = data.strokeColor;
      }
      ctx.fillStyle = data.fillColor;
      textLines.forEach((text, index) => ctx.fillText(text, 0, index * lineHeight));
      ctx.restore();

      if (data.strokeWidth > 0) {
        ctx.lineWidth = Math.min(data.strokeWidth, MAX_STROKE_WIDTH);
        textLines.forEach((text, index) => ctx.strokeText(text, 0, index * lineHeight));
      }

      ctx.restore();
    });

    return this;
  }

  clear() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    return this;
  }

  show() {
    this.#canvas.hidden = false;
    return this;
  }

  hide() {
    this.#canvas.hidden = true;
    return this;
  }

  static createInstance(canvasEl) {
    return new Canvas(canvasEl);
  }
}
