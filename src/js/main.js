import AntonRegular from 'url:../assets/fonts/Anton/Anton-Regular.ttf';
import OswaldRegular from 'url:../assets/fonts/Oswald/Oswald-Regular.ttf';
import OswaldBold from 'url:../assets/fonts/Oswald/Oswald-Bold.ttf';
import RobotoRegular from 'url:../assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from 'url:../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoCondensedRegular from 'url:../assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf';
import RobotoCondensedBold from 'url:../assets/fonts/RobotoCondensed/RobotoCondensed-Bold.ttf';
import CourierPrimeRegular from 'url:../assets/fonts/CourierPrime/CourierPrime-Regular.ttf';
import CourierPrimeBold from 'url:../assets/fonts/CourierPrime/CourierPrime-Bold.ttf';
import OpenSansRegular from 'url:../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansBold from 'url:../assets/fonts/OpenSans/OpenSans-Bold.ttf';
import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.min.js';
import { WebShare } from '@georapbox/web-share-element/dist/web-share.min.js';
import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

WebShare.defineCustomElement();
CapturePhoto.defineCustomElement();

const errorsContainer = document.getElementById('errorsContainer');
const videoModal = document.getElementById('videoModal');
const downloadModal = document.getElementById('downloadModal');
const closeVideoModalBtn = document.getElementById('closeVideoModalBtn');
const canvas = document.getElementById('canvas');
const canvasPlaceholder = document.getElementById('canvasPlaceholder');
const instructionsEl = document.getElementById('instructions');
const ctx = canvas.getContext('2d');
const imageUploadMethodSelect = document.getElementById('imageUploadMethodSelect');
const fileInput = document.getElementById('file');
const imageUrlForm = document.getElementById('imageUrlForm');
const addTextboxBtn = document.getElementById('addTextboxBtn');
const inputsContainer = document.getElementById('inputsContainer');
const generateMemeBtn = document.getElementById('generateMemeBtn');
const openVideoModalBtn = document.getElementById('openVideoModalBtn');
const downloadMemeBtn = document.getElementById('downloadMemeBtn');
const downloadMemePreview = document.getElementById('downloadMemePreview');
const downloadMemeModalCloseBtn = document.getElementById('downloadMemeModalCloseBtn');
const webShareComponent = document.querySelector('web-share');
const DEFAULT_GENERATED_FILE_NAME = 'meme.png';
let selectedImage = null;
let generatedFileName = DEFAULT_GENERATED_FILE_NAME;

const acceptedMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/avif'];

fileInput.accept = acceptedMimeTypes.join(',');

const defaultOptions = {
  text: '',
  fillColor: '#ffffff',
  shadowColor: '#000000',
  font: 'Anton',
  fontSize: 40,
  textAlign: 'center',
  shadowBlur: 3,
  offsetY: 0,
  offsetX: 0,
  allCaps: true
};

const options = [
  Object.assign({}, defaultOptions),
  Object.assign({}, defaultOptions)
];

const loadFonts = async (name, path, options = {}) => {
  try {
    const font = new FontFace(name, `url(${path})`, { ...options });
    await font.load();
    document.fonts.add(font);
  } catch (err) {
    console.error(err);
  }
};

const toggleModal = (modalEl, visible) => {
  if (visible) {
    modalEl.style.display = 'block';
    modalEl.setAttribute('data-open', '');
    document.body.classList.add('modal-open');

    modalEl.dispatchEvent(new CustomEvent('modal-open', {
      bubbles: true,
      detail: {
        modalId: modalEl.id
      }
    }));
  } else {
    modalEl.style.display = 'none';
    modalEl.removeAttribute('data-open');
    document.body.classList.remove('modal-open');

    modalEl.dispatchEvent(new CustomEvent('modal-close', {
      bubbles: true,
      detail: {
        modalId: modalEl.id
      }
    }));
  }
};

const hideError = evt => {
  const target = evt.currentTarget;
  target.removeEventListener('click', hideError);
  errorsContainer.removeChild(target.parentNode);
};

const showError = (message = '') => {
  const template = /*template*/`
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  const div = document.createElement('div');
  div.className = 'alert alert-danger alert-dismissible text-break mb-2 fade';
  div.innerHTML = template;
  div.querySelector('button').addEventListener('click', hideError);
  errorsContainer.appendChild(div);
  setTimeout(() => div.classList.add('show'), 100);
};

const urltoFile = async (url, filename, mimeType) => {
  const request = await fetch(url);
  const buffer = await request.arrayBuffer();
  const file = new File([buffer], filename, { type: mimeType });
  return file;
};

const generateMeme = async () => {
  const dataUrl = canvas.toDataURL('image/png');

  // Prepare download link
  const downloadLink = dataUrl.replace('image/png', 'image/octet-stream');
  downloadMemeBtn.download = generatedFileName;
  downloadMemeBtn.href = downloadLink;
  downloadMemePreview.src = downloadLink;

  // Prepare for sharing file
  if (isWebShareSupported()) {
    try {
      const file = await urltoFile(dataUrl, DEFAULT_GENERATED_FILE_NAME, 'image/png');
      webShareComponent.shareFiles = [file];
      webShareComponent.shareUrl = window.location.href;
      webShareComponent.shareTitle = document.title;
      webShareComponent.classList.remove('d-none');
    } catch (error) {
      console.error(error);
    }
  }

  toggleModal(downloadModal, true);
};

const draw = image => {
  if (image == null) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  options.forEach(function (item, index) {
    ctx.font = `${item.fontSize}px ${item.font}`;

    const multiplier = index + 1;
    const lineHeight = ctx.measureText('M').width + 20;
    const xPos = item.textAlign === 'center' || !item.textAlign ? canvas.width / 2 : item.textAlign === 'left' ? 0 : canvas.width;
    const shadowBlur = item.shadowBlur;
    const text = item.allCaps === true ? item.text.toUpperCase() : item.text;

    ctx.fillStyle = item.fillColor;
    ctx.textAlign = item.textAlign;
    ctx.save();

    if (shadowBlur !== 0) {
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowColor = item.shadowColor;
    }

    ctx.fillText(
      text,
      xPos + item.offsetX,
      index === 1 ? canvas.height - 20 + item.offsetY : lineHeight * (multiplier - 1 || 1) + item.offsetY
    );

    ctx.restore();
  });
};

const onImageLoaded = evt => {
  const MAX_WIDTH = 800;
  const MAX_HEIGHT = 600;
  let width = evt.target.width;
  let height = evt.target.height;

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

  selectedImage = evt.target;

  generateMemeBtn.disabled = false;
  canvas.classList.remove('d-none');

  instructionsEl && instructionsEl.remove();
};

const handleFileSelect = file => {
  const image = new Image();
  const reader = new FileReader();

  generatedFileName = `${file.name.replace(/\.[^.]+$/, '')}-meme.png`;

  reader.addEventListener('load', function (evt) {
    const data = evt.target.result;
    image.addEventListener('load', onImageLoaded);
    image.src = data;
  });

  reader.readAsDataURL(file);
};

const onOpenVideoModalButonClick = () => {
  const capturePhotoComponent = document.createElement('capture-photo');
  capturePhotoComponent.outputDisabled = true;
  videoModal.querySelector('.modal-body').appendChild(capturePhotoComponent);
  toggleModal(videoModal, true);
};

const handleTextPropChange = (element, index, prop) => {
  if (element.type === 'checkbox') {
    options[index][prop] = element.checked;
  } else if (element.type === 'number') {
    options[index][prop] = Number(element.value);
  } else {
    options[index][prop] = element.value;
  }

  draw(selectedImage);
};

const createNewInput = index => {
  const inputTemplate = /* html */`
    <div class="d-flex">
      <input class="form-control m-2" type="text" value="${options[index].text}" data-input="text" autocomplete="off" placeholder="${index === 0 ? 'Top Text' : index === 1 ? 'Bottom Text' : `Text #${index + 1}`}" style="min-width: 0;">
      <div class="d-flex align-items-center pr-2">
        <input class="form-control" type="color" value="${options[index].fillColor}" data-input="fillColor" title="Fill color">
        <input class="form-control" type="color" value="${options[index].shadowColor}" data-input="shadowColor" title="Outline color">
        <button class="btn btn-secondary settings-button" data-button="settings"></button>
      </div>
    </div>
    <div class="p-2 d-none" data-section="settings">
      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Font: </label>
          <select class="custom-select" data-input="font">
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
              <option value="Anton">Anton</option>
              <option value="Oswald-Regular">Oswald Regular</option>
              <option value="Oswald-Bold">Oswald Bold</option>
              <option value="Roboto-Regular">Roboto Regular</option>
              <option value="Roboto-Bold">Roboto Bold</option>
              <option value="RobotoCondensed-Regular">Roboto Condensed Regular</option>
              <option value="RobotoCondensed-Bold">Roboto Condensed Bold</option>
              <option value="CourierPrime-Regular">Courier Prime Regular</option>
              <option value="CourierPrime-Bold">Courier Prime Bold</option>
              <option value="OpenSans-Regular">Open Sans Regular</option>
              <option value="OpenSans-Bold">Open Sans Bold</option>
            </optgroup>
          </select>
        </div>
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Font size:</label>
          <input class="form-control" type="number" min="1" max="100" value="${options[index].fontSize}" data-input="fontSize">
        </div>
      </div>
      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Shadow width:</label>
          <input class="form-control" type="number" min="0" max="10" value="${options[index].shadowBlur}" data-input="shadowBlur">
        </div>
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Text align:</label>
          <select class="custom-select" data-input="textAlign">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Vertical offset:</label>
          <input class="form-control" type="number" value="${options[index].offsetY}" data-input="offsetY">
        </div>
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate">Horizontal offset:</label>
          <input class="form-control" type="number" value="${options[index].offsetX}" data-input="offsetX">
        </div>
      </div>
      <div class="form-row">
        <div class="col-lg-12">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${index}" data-input="allCaps">
            <label class="custom-control-label" for="allCapsCheckbox_${index}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `;

  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');

  div.className = 'bg-light border shadow-sm mb-3 rounded';
  div.setAttribute('data-section', 'textBox');
  div.setAttribute('data-index', index);
  div.innerHTML = inputTemplate;
  setTimeout(() => selectedImage && div.querySelector('[data-input="text"]').focus(), 100);
  div.querySelector('[data-input="font"]').value = options[index].font;
  div.querySelector('[data-input="textAlign"]').value = options[index].textAlign;
  div.querySelector('[data-input="allCaps"]').checked = options[index].allCaps;

  return fragment.appendChild(div);
};

const onAddTextboxBtnClicked = () => {
  const textBoxesLength = document.querySelectorAll('[data-input="text"]').length;
  options.push(Object.assign({}, defaultOptions));
  inputsContainer.appendChild(createNewInput(textBoxesLength));
};

const handleImageUploadFromURL = async evt => {
  evt.preventDefault();

  const form = evt.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const imageUrl = form['imageUrl'].value;

  if (!imageUrl.trim()) {
    return;
  }

  submitButton.disabled = true;
  submitButton.querySelector('.spinner').classList.remove('d-none');
  submitButton.querySelector('.label').classList.add('d-none');

  try {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const mimeType = blob.type || '';

    if (!acceptedMimeTypes.includes(mimeType)) {
      return showError(`This is not an accepted image format. Accepted MIME types are: ${acceptedMimeTypes.join(', ')}`);
    }

    const fileExtension = mimeType.split('/')[1];
    const file = new File([blob], `${imageUrl}.${fileExtension}`, blob);

    file && handleFileSelect(file);

    fileInput.value = fileInput.defaultValue;
  } catch (err) {
    showError(`Failed to load image from "${imageUrl}".`);
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('.spinner').classList.add('d-none');
    submitButton.querySelector('.label').classList.remove('d-none');
  }
};

fileInput.addEventListener('change', evt => {
  imageUrlForm['imageUrl'].value = '';
  handleFileSelect(evt.target.files[0]);
});

openVideoModalBtn.addEventListener('click', onOpenVideoModalButonClick);

closeVideoModalBtn.addEventListener('click', () => toggleModal(videoModal, false));

addTextboxBtn.addEventListener('click', onAddTextboxBtnClicked);

generateMemeBtn.addEventListener('click', generateMeme);

downloadMemeBtn.addEventListener('click', () => toggleModal(downloadModal, false));

downloadMemeModalCloseBtn.addEventListener('click', () => toggleModal(downloadModal, false));

imageUrlForm.addEventListener('submit', handleImageUploadFromURL);

canvasPlaceholder.addEventListener('dragover', evt => {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy';
});

canvasPlaceholder.addEventListener('drop', evt => {
  evt.stopPropagation();
  evt.preventDefault();

  const fileList = evt.dataTransfer.files;
  const [file] = fileList;

  if (!acceptedMimeTypes.includes(file.type)) {
    return;
  }

  fileInput.value = fileInput.defaultValue;
  imageUrlForm['imageUrl'].value = '';

  handleFileSelect(file);
});

inputsContainer.appendChild(createNewInput(0));
inputsContainer.appendChild(createNewInput(1));

inputsContainer.addEventListener('input', evt => {
  const element = evt.target;
  const index = Number(element.closest('[data-section="textBox"]').getAttribute('data-index'));
  let prop;

  if (element.matches('[data-input="text"]')) {
    prop = 'text';
  } else if (element.matches('[data-input="fillColor"]')) {
    prop = 'fillColor';
  } else if (element.matches('[data-input="shadowColor"]')) {
    prop = 'shadowColor';
  } else if (element.matches('[data-input="font"]')) {
    prop = 'font';
  } else if (element.matches('[data-input="fontSize"]')) {
    prop = 'fontSize';
  } else if (element.matches('[data-input="textAlign"]')) {
    prop = 'textAlign';
  } else if (element.matches('[data-input="shadowBlur"]')) {
    prop = 'shadowBlur';
  } else if (element.matches('[data-input="offsetY"]')) {
    prop = 'offsetY';
  } else if (element.matches('[data-input="offsetX"]')) {
    prop = 'offsetX';
  }

  if (prop) {
    handleTextPropChange(element, index, prop);
  }
});

inputsContainer.addEventListener('change', evt => {
  const element = evt.target;
  const index = Number(element.closest('[data-section="textBox"]').getAttribute('data-index'));
  let prop;

  if (element.matches('[data-input="allCaps"]')) {
    prop = 'allCaps';
  }

  if (prop) {
    handleTextPropChange(element, index, prop);
  }
});

inputsContainer.addEventListener('click', evt => {
  const element = evt.target;

  if (element.matches('[data-button="settings"]')) {
    const textBoxIndex = element.closest('[data-section="textBox"]').getAttribute('data-index');
    const textBoxEls = document.querySelectorAll('[data-section="textBox"]');

    textBoxEls.forEach(el => {
      const settingsEl = el.querySelector('[data-section="settings"]');

      if (el.getAttribute('data-index') === textBoxIndex) {
        settingsEl.classList.toggle('d-none');
      } else {
        settingsEl.classList.add('d-none');
      }
    });
  }
});

imageUploadMethodSelect.addEventListener('change', evt => {
  document.querySelectorAll('.upload-method').forEach(el => {
    el.hidden = el.id !== evt.target.value;
  });
});

document.addEventListener('web-share:error', () => {
  showError('There was an error while trying to share your meme.');
});

document.addEventListener('capture-photo:error', evt => {
  console.error(evt.detail.error);
  showError(evt.detail.error.message);
});

document.addEventListener('capture-photo:success', evt => {
  toggleModal(videoModal, false);
  const image = new Image();
  image.addEventListener('load', onImageLoaded);
  image.src = evt.detail.dataURI;

  if (fileInput.value) {
    fileInput.value = fileInput.defaultValue;
    imageUrlForm['imageUrl'].value = '';
    generatedFileName = DEFAULT_GENERATED_FILE_NAME;
  }
});

document.addEventListener('modal-close', evt => {
  if (evt.detail.modalId === 'videoModal') {
    const capturePhotoComponent = videoModal.querySelector('capture-photo');
    capturePhotoComponent.remove();
  }
});

document.addEventListener('keyup', evt => {
  if (evt.code !== 'Escape') {
    return;
  }

  if (videoModal.hasAttribute('data-open')) {
    toggleModal(videoModal, false);
  }

  if (downloadModal.hasAttribute('data-open')) {
    toggleModal(downloadModal, false);
  }
});

loadFonts('Anton', AntonRegular, {style: 'normal', weight: '400'});
loadFonts('Oswald-Regular', OswaldRegular, {style: 'normal', weight: '400'});
loadFonts('Oswald-Bold', OswaldBold, {style: 'normal', weight: '700'});
loadFonts('Roboto-Regular', RobotoRegular, {style: 'normal', weight: '400'});
loadFonts('Roboto-Bold', RobotoBold, {style: 'normal', weight: '700'});
loadFonts('RobotoCondensed-Regular', RobotoCondensedRegular, {style: 'normal', weight: '400'});
loadFonts('RobotoCondensed-Bold', RobotoCondensedBold, {style: 'normal', weight: '700'});
loadFonts('CourierPrime-Regular', CourierPrimeRegular, {style: 'normal', weight: '400'});
loadFonts('CourierPrime-Bold', CourierPrimeBold, {style: 'normal', weight: '700'});
loadFonts('OpenSans-Regular', OpenSansRegular, {style: 'normal', weight: '400'});
loadFonts('OpenSans-Bold', OpenSansBold, {style: 'normal', weight: '400'});
