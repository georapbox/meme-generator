(function MemeMaker() {
  'use strict';

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var fileInput = document.getElementById('file');
  var fileInputName = document.getElementById('fileName');
  var addInputBtn = document.getElementById('addInputBtn');
  var inputsContainer = document.getElementById('inputsContainer');
  var generateMemeBtn = document.getElementById('generateMemeBtn');
  var uploadedImage = null;
  var memeTexts = [];

  function handleInputChange(evt) {
    var element = evt.target;
    var index = Number(element.getAttribute('data-index'));
    memeTexts[index] = element.value;
    draw(uploadedImage);
    console.log(memeTexts);
  }

  function draw(image) {
    if (image == null) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = '30pt Impact';
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';

    var lineHeight = ctx.measureText('M').width + 20;

    memeTexts.forEach(function (item, index) {
      var multiplier = index + 1;

      ctx.fillText(item, canvas.width / 2, lineHeight * multiplier);
      ctx.strokeText(item, canvas.width / 2, lineHeight * multiplier);
    });
  }

  function generateMeme() {
    window.open(document.querySelector('canvas').toDataURL());
  }

  function handleFileSelect(evt) {
    var image = new Image();
    var file = evt.target.files[0];
    var reader = new FileReader();

    if (file && file.name) {
      fileInputName.textContent = file.name;
    }

    reader.addEventListener('load', function (evt) {
      var data = evt.target.result;

      image.addEventListener('load', function (evt) {
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var width = image.width;
        var height = image.height;

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

  function addInputListeners() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-type="meme-text"]'), function (item) {
      item.addEventListener('input', handleInputChange);
    });
  }

  function removeInputListeners() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-type="meme-text"]'), function (item) {
      item.removeEventListener('input', handleInputChange);
    });
  }

  function createNewInput() {
    var el = document.createElement('input');
    el.className = 'form-control mb-3';
    el.type = 'text';
    el.setAttribute('data-index', document.querySelectorAll('[data-type="meme-text"]').length);
    el.setAttribute('data-type', 'meme-text');
    el.autocomplete = 'off';
    return el;
  }

  function onNewInputButtonClicked() {
    removeInputListeners();
    inputsContainer.appendChild(createNewInput());
    addInputListeners();
  }

  fileInput.addEventListener('change', handleFileSelect, false);

  addInputBtn.addEventListener('click', onNewInputButtonClicked, false);

  generateMemeBtn.addEventListener('click', generateMeme, false);

  addInputListeners();
}());
