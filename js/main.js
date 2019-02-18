(function MemeMaker() {
  'use strict';

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var fileInput = document.getElementById('file');
  var fileInputName = document.getElementById('fileName');
  var addInputBtn = document.getElementById('addInputBtn');
  var inputsContainer = document.getElementById('inputsContainer');
  // var generateMemeBtn = document.getElementById('generateMemeBtn');
  var uploadedImage = null;
  var memeData = [{}];

  function handleTextChange(evt) {
    var element = evt.target;
    var index = Number(element.getAttribute('data-index'));
    memeData[index].text = element.value;
    draw(uploadedImage);
  }

  function handleFillColorChange(evt) {
    var element = evt.target;
    var index = Number(element.getAttribute('data-index'));
    memeData[index].fillColor = element.value;
    draw(uploadedImage);
  }

  function handleStrokeColorChange(evt) {
    var element = evt.target;
    var index = Number(element.getAttribute('data-index'));
    memeData[index].strokeColor = element.value;
    draw(uploadedImage);
  }

  function draw(image) {
    if (image == null) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = '30pt Impact';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2;

    var lineHeight = ctx.measureText('M').width + 20;

    memeData.forEach(function (item, index) {
      var multiplier = index + 1;

      ctx.fillStyle = item.fillColor || 'white';
      ctx.strokeStyle = item.strokeColor || 'black';
      ctx.fillText(item.text || '', canvas.width / 2, lineHeight * multiplier);
      ctx.strokeText(item.text || '', canvas.width / 2, lineHeight * multiplier);
    });
  }

  // function generateMeme() {
  //   window.open(document.querySelector('canvas').toDataURL());
  // }

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

  function createNewInput(index) {
    var inputTemplate = '' +
      '<input class="form-control h-100" type="text" data-index="' + index + '" data-input="text" autocomplete="off" placeholder="Textbox">' +
      '<div class="bg-body d-flex px-2">' +
        '<input class="form-control color-input" type="color" value="#ffffff" data-index="' + index + '" data-input="fill-color">' +
        '<input class="form-control color-input" type="color" value="#000000" data-index="' + index + '" data-input="stroke-color">' +
        '<button class="btn btn-secondary settings-button"></button>' +
      '</div>';

    var fragment = document.createDocumentFragment();
    var div = document.createElement('div');
    div.className = 'd-flex mb-3';
    div.style.height = '40px';
    div.innerHTML = inputTemplate;
    return fragment.appendChild(div);
  }

  function onNewInputButtonClicked() {
    var textBoxesLength = document.querySelectorAll('[data-input="text"]').length;

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

  inputsContainer.addEventListener('input', function (evt) {
    if (evt.target.matches('[data-input="text"')) {
      handleTextChange(evt);
    } else if (evt.target.matches('[data-input="fill-color"')) {
      handleFillColorChange(evt);
    } else if (evt.target.matches('[data-input="stroke-color"')) {
      handleStrokeColorChange(evt);
    }
  });
}());
