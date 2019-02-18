(function MemeMaker() {
  'use strict';

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const fileInput = document.getElementById('file');
  const fileInputName = document.getElementById('fileName');
  const addInputBtn = document.getElementById('addInputBtn');
  const inputsContainer = document.getElementById('inputsContainer');
  // const generateMemeBtn = document.getElementById('generateMemeBtn');
  let uploadedImage = null;
  const memeData = [{}];

  function draw(image) {
    if (image == null) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    memeData.forEach(function (item, index) {
      ctx.font = `${item.fontSize || 50}px ${item.font || 'Impact'}`;

      const multiplier = index + 1;
      const lineHeight = ctx.measureText('M').width + 20;
      const xPos = item.textAlign === 'center' || !item.textAlign ? canvas.width / 2 : item.textAlign === 'left' ? 0 : canvas.width;

      ctx.lineWidth = 2;
      ctx.fillStyle = item.fillColor || 'white';
      ctx.strokeStyle = item.strokeColor || 'black';
      ctx.textAlign = item.textAlign || 'center';
      ctx.fillText(item.text || '', xPos, lineHeight * multiplier);
      ctx.strokeText(item.text || '', xPos, lineHeight * multiplier);
    });
  }

  // function generateMeme() {
  //   window.open(document.querySelector('canvas').toDataURL());
  // }

  function handleFileSelect(evt) {
    const image = new Image();
    const file = evt.target.files[0];
    const reader = new FileReader();

    if (file && file.name) {
      fileInputName.textContent = file.name;
    }

    reader.addEventListener('load', function (evt) {
      const data = evt.target.result;

      image.addEventListener('load', function (evt) {
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        let width = image.width;
        let height = image.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;

        draw(evt.target);

        uploadedImage = evt.target;
      });

      image.src = data;
    });

    reader.readAsDataURL(file);
  }

  function handleTextPropChange(element, index, prop) {
    memeData[index][prop] = element.value;
    draw(uploadedImage);
  }

  function createNewInput(index) {
    const inputTemplate =`
      <div class="d-flex" style="height: 40px;">
        <input class="form-control h-100" type="text" data-index="${index}" data-input="text" autocomplete="off" placeholder="Textbox">
        <div class="bg-body d-flex px-2">
          <input class="form-control color-input" type="color" value="#ffffff" data-index="${index}" data-input="fill-color">
          <input class="form-control color-input" type="color" value="#000000" data-index="${index}" data-input="stroke-color">
          <button class="btn btn-secondary settings-button" data-index=${index} data-button="settings"></button>
        </div>
      </div>
      <div class="bg-body p-3 d-none" data-section="settings_${index}">
        <div class="form-inline mb-3">
          <label class="my-1 mr-sm-2">Font: </label>
          <select class="custom-select" data-input="font" data-index="${index}">
            <option value="Impact" selected>Impact</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Times">Times</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Palatino">Palatino</option>
            <option value="Garamond">Garamond</option>
            <option value="Bookman">Bookman</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Arial Black">Arial Black</option>
          </select>
        </div>
        <div class="form-inline mb-3">
          <label class="my-1 mr-sm-2">Font size: </label>
          <input class="form-control" type="number" min="1" max="100" value="50" data-input="font-size" data-index="${index}">
          </select>
        </div>
        <div class="form-inline mb-3">
          <label class="my-1 mr-sm-2">Text align: </label>
          <select class="custom-select" data-input="text-align" data-index="${index}">
            <option value="left">Left</option>
            <option value="center" selected>Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      `;

    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = inputTemplate;
    return fragment.appendChild(div);
  }

  function onNewInputButtonClicked() {
    const textBoxesLength = document.querySelectorAll('[data-input="text"]').length;

    if (textBoxesLength >= 4) {
      addInputBtn.disabled = true;
    }

    memeData.push({});
    inputsContainer.appendChild(createNewInput(textBoxesLength));
  }

  fileInput.addEventListener('change', handleFileSelect, false);

  addInputBtn.addEventListener('click', onNewInputButtonClicked, false);

  // generateMemeBtn.addEventListener('click', generateMeme, false);

  inputsContainer.appendChild(createNewInput(0));

  inputsContainer.addEventListener('input', evt => {
    const element = evt.target;
    const index = Number(element.getAttribute('data-index'));
    let prop;

    if (element.matches('[data-input="text"')) {
      prop = 'text';
    } else if (element.matches('[data-input="fill-color"')) {
      prop = 'fillColor';
    } else if (element.matches('[data-input="stroke-color"')) {
      prop = 'strokeColor';
    } else if (element.matches('[data-input="font"')) {
      prop = 'font';
    } else if (element.matches('[data-input="font-size"')) {
      prop = 'fontSize';
    } else if (element.matches('[data-input="text-align"')) {
      prop = 'textAlign';
    }

    if (prop) {
      handleTextPropChange(element, index, prop);
    }
  }, false);

  inputsContainer.addEventListener('click', evt => {
    const element = evt.target;

    if (element.matches('[data-button="settings"]')) {
      element.classList.toggle('active');
      document.querySelector(`[data-section="settings_${evt.target.getAttribute('data-index')}"]`).classList.toggle('d-none');
    }
  }, false);
}());
