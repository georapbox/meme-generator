import { uid } from './utils/uid.js';
import { customFonts } from './custom-fonts.js';
import { MAX_SHADOW_BLUR_SIZE, MAX_STROKE_WIDTH, MAX_ROTATE } from './constants.js';

const defaultTextboxData = {
  id: '',
  text: '',
  fillColor: '#ffffff',
  strokeColor: '#000000',
  font: 'Pressuru',
  fontSize: 40,
  fontWeight: 'normal',
  textAlign: 'center',
  shadowBlur: 0,
  strokeWidth: 1.5,
  offsetY: 0,
  offsetX: 0,
  rotate: 0,
  allCaps: true,
  textBackgroundEnabled: false,
  textBackgroundColor: '#000000'
};

const textboxes = new Map();

class Textbox {
  constructor(data) {
    const id = uid('textbox', Date.now().toString(36));

    this.data = data ? { ...data, id } : { ...defaultTextboxData, id };

    textboxes.set(id, this);

    document.dispatchEvent(
      new CustomEvent(`textbox-create`, {
        bubbles: true,
        composed: true,
        detail: { textbox: this }
      })
    );
  }

  getData() {
    return this.data;
  }

  static create(data) {
    return new Textbox(data);
  }

  static getAll() {
    return textboxes;
  }

  static getById(id) {
    return textboxes.get(id);
  }

  static remove(id) {
    textboxes.delete(id);

    document.dispatchEvent(
      new CustomEvent(`textbox-remove`, {
        bubbles: true,
        composed: true,
        detail: { id }
      })
    );
  }

  static createElement(textbox, autoFocus = true) {
    if (!(textbox instanceof Textbox)) {
      return;
    }

    const data = textbox.getData();
    const {
      id,
      text,
      fillColor,
      strokeColor,
      fontSize,
      shadowBlur,
      strokeWidth,
      offsetX,
      offsetY,
      rotate,
      textBackgroundColor
    } = data;

    const template = /* html */ `
    <div class="d-flex align-items-center" data-section="basic-settings">
      <button type="button" class="btn btn-link" data-button="duplicate-text-box" title="Duplicate text box"></button>
      <button type="button" class="btn btn-link" data-button="delete-text-box" title="Remove text box"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="${`Text #${textboxes.size}`}">${text}</textarea>

      <div class="d-flex align-items-center pe-2">
        <label for="fillColorInput" class="visually-hidden">Fill color</label>
        <input class="form-control" type="color" value="${fillColor}" id="fillColorInput_${id}" data-input="fillColor" title="Fill color">

        <label for="strokeColorInput" class="visually-hidden">Outline color</label>
        <input class="form-control" type="color" value="${strokeColor}" id="strokeColorInput_${id}" data-input="strokeColor" title="Outline color">

        <button type="button" class="btn btn-secondary settings-button" data-button="settings" title="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="advanced-settings" hidden>
      <div class="row g-2">
        <div class="col-12">
          <details class="emoji-picker-details">
            <summary>Emoji picker</summary>
            <emoji-picker class="light"></emoji-picker>
          </details>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="fontInput_${id}" class="mb-1 d-block text-truncate">Font: </label>

          <select class="form-select" data-input="font" id="fontInput_${id}">
            <optgroup label="Web fonts">
              <option value="Impact">Impact</option>
              <option value="Arial">Arial</option>
              <option value="Arial Black">Arial Black</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Times">Times</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
            </optgroup>
            <optgroup label="Google fonts">
              ${customFonts.map(({ name, label }) => `<option value="${name}">${label}</option>`)}
            </optgroup>
          </select>
        </div>

        <div class="col-4 mb-3">
          <label for="fontSizeInput_${id}" class="mb-1 d-block text-truncate">Size:</label>
          <input class="form-control" type="number" min="1" value="${fontSize}" data-input="fontSize" id="fontSizeInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label for="fontWeightInput_${id}" class="mb-1 d-block text-truncate">Weight:</label>
          <select class="form-select" data-input="fontWeight" id="fontWeightInput_${id}">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label for="shadowWidthInput_${id}" class="mb-1 d-block text-truncate">Shadow size:</label>
          <input class="form-control" type="number" min="0" max="${MAX_SHADOW_BLUR_SIZE}" value="${shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="strokeWidthInput_${id}">Outline size:</label>
          <input class="form-control" type="number" min="0" max="${MAX_STROKE_WIDTH}" step="0.5" value="${strokeWidth}" data-input="strokeWidth" id="strokeWidthInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label for="textAlignInput_${id}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="form-select" data-input="textAlign" id="textAlignInput_${id}">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetYInput_${id}">Vertical offset:</label>
          <input class="form-control" type="number" value="${offsetY}" data-input="offsetY" id="offsetYInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetXInput_${id}">Horizontal offset:</label>
          <input class="form-control" type="number" value="${offsetX}" data-input="offsetX" id="offsetXInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="textRotateInput_${id}">Rotate:</label>
          <input class="form-control" type="number" value="${rotate}" data-input="rotate" id="textRotateInput_${id}" min="-360" max="${MAX_ROTATE}">
        </div>

        <div class="col-12">
          <div class="move-text-actions mb-3">
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Up"></button>
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Right"></button>
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Down"></button>
            <button type="button" class="btn btn-secondary" data-action="move-text" aria-label="Left"></button>
          </div>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-12">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="allCapsCheckbox_${id}" data-input="allCaps">
            <label class="form-check-label" for="allCapsCheckbox_${id}">ALL CAPS</label>
          </div>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-12">
          <div class="d-flex align-items-center gap-3">
            <div class="form-check">
              <label class="form-check-label" for="textBackgroundEnabledInput_${id}">Enable text background</label>
              <input class="form-check-input" type="checkbox" role="switch" data-input="textBackgroundEnabled" id="textBackgroundEnabledInput_${id}">
            </div>

            <div>
              <label class="visually-hidden" for="textBackgroundColorInput_${id}">Background color:</label>
              <input class="border rounded p-0" type="color" value="${textBackgroundColor}" data-input="textBackgroundColor" id="textBackgroundColorInput_${id}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');

    div.setAttribute('id', id);
    div.setAttribute('data-section', 'textbox');
    div.className = 'bg-body-tertiary border shadow-sm mb-3 rounded';
    div.innerHTML = template;
    div.querySelectorAll('select').forEach(el => (el.value = data[el.dataset.input]));
    div.querySelectorAll('input[type="checkbox"]').forEach(el => (el.checked = data[el.dataset.input]));

    const textboxEl = fragment.appendChild(div);

    if (autoFocus) {
      setTimeout(() => textboxEl.querySelector('[data-input="text"]').focus(), 0);
    }

    return textboxEl;
  }
}

export { Textbox };
