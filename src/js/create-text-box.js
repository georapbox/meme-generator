import { customFonts } from './custom-fonts.js';

export const createTextBox = (id, data = {}) => {
  const textBoxNumber = document.querySelectorAll('[data-section="textBox"]').length + 1;

  const template = /* html */`
    <div class="d-flex align-items-center">
      <button type="button" class="btn btn-link" data-button="duplicate-text-box" title="Duplicate text box"></button>
      <button type="button" class="btn btn-link" data-button="delete-text-box" title="Remove text box"></button>

      <textarea class="form-control meme-text" type="text" data-input="text" autocomplete="off" rows="1" placeholder="${`Text #${textBoxNumber}`}">${data.text}</textarea>

      <div class="d-flex align-items-center pe-2">
        <label for="fillColorInput" class="visually-hidden">Fill color</label>
        <input class="form-control" type="color" value="${data.fillColor}" id="fillColorInput" data-input="fillColor" title="Fill color">

        <label for="strokeColorInput" class="visually-hidden">Outline color</label>
        <input class="form-control" type="color" value="${data.strokeColor}" id="strokeColorInput" data-input="strokeColor" title="Outline color">

        <button type="button" class="btn btn-secondary settings-button" data-button="settings" title="Settings"></button>
      </div>
    </div>

    <div class="p-2" data-section="settings" hidden>
      <div class="row g-2">
        <div class="col-12">
          <details class="emoji-picker-details">
            <summary>Emoji picker</summary>
            <emoji-picker class="light"></emoji-picker>
          </details>
        </div>

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
          <input class="form-control" type="number" min="1" value="${data.fontSize}" data-input="fontSize" id="fontSizeInput_${id}">
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
          <input class="form-control" type="number" min="0" max="100" value="${data.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="borderWidthInput_${id}">Border width:</label>
          <input class="form-control" type="number" min="0" max="100" value="${data.borderWidth}" data-input="borderWidth" id="borderWidthInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label for="textAlignInput_${id}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="form-select" data-input="textAlign" id="textAlignInput_${id}" value="right">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div class="row g-2">
        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetYInput_${id}">Vertical offset:</label>
          <input class="form-control" type="number" value="${data.offsetY}" data-input="offsetY" id="offsetYInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetXInput_${id}">Horizontal offset:</label>
          <input class="form-control" type="number" value="${data.offsetX}" data-input="offsetX" id="offsetXInput_${id}">
        </div>

        <div class="col-4 mb-3">
          <label class="mb-1 d-block text-truncate" for="textRotateInput_${id}">Rotate:</label>
          <input class="form-control" type="number" value="${data.rotate}" data-input="rotate" id="textRotateInput_${id}" min="-360" max="360">
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
        <div class="col-lg-12">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="allCapsCheckbox_${id}" data-input="allCaps">
            <label class="form-check-label" for="allCapsCheckbox_${id}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `;

  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');

  div.setAttribute('id', id);
  div.setAttribute('data-section', 'textBox');
  div.className = 'bg-light border shadow-sm mb-3 rounded';
  div.innerHTML = template;
  div.querySelectorAll('select').forEach(el => el.value = data[el.dataset.input]);
  div.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = data[el.dataset.input]);

  return fragment.appendChild(div);
};
