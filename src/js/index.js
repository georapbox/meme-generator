import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/capture-photo-element/dist/capture-photo-defined.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import { arrayRemove } from './utils/array-remove.js';
import { ACCEPTED_MIME_TYPES, DEFAULT_GENERATED_FILE_NAME } from './constants.js';
import { customFonts, loadCustomFont } from './custom-fonts.js';
import { fileFromUrl } from './file-from-url.js';
import { toastAlert } from './toast-alert.js';
import { toggleModal } from './toggle-modal.js';
import { createTextBox } from './create-text-box.js';

const videoModal = document.getElementById('videoModal');
const downloadModal = document.getElementById('downloadModal');
const closeVideoModalBtn = document.getElementById('closeVideoModalBtn');
const canvas = document.getElementById('canvas');
const canvasPlaceholder = document.getElementById('canvasPlaceholder');
const instructionsEl = document.getElementById('instructions');
const ctx = canvas.getContext('2d');
const imageUploadMethodSelect = document.getElementById('imageUploadMethodSelect');
const fileInput = document.getElementById('fileInput');
const imageUrlForm = document.getElementById('imageUrlForm');
const addTextboxBtn = document.getElementById('addTextboxBtn');
const inputsContainer = document.getElementById('inputsContainer');
const generateMemeBtn = document.getElementById('generateMemeBtn');
const openVideoModalBtn = document.getElementById('openVideoModalBtn');
const downloadMemeBtn = document.getElementById('downloadMemeBtn');
const downloadMemePreview = document.getElementById('downloadMemePreview');
const downloadMemeModalCloseBtn = document.getElementById('downloadMemeModalCloseBtn');
const webShareComponent = document.querySelector('web-share');
const galleryEl = document.getElementById('gallery');
const uploadMethodEls = document.querySelectorAll('.upload-method');
let selectedImage = null;
let generatedFileName = DEFAULT_GENERATED_FILE_NAME;
let reqAnimFrame = null;

const defaultTextOptions = {
  _isSettingsOpen: false,
  text: '',
  fillColor: '#ffffff',
  shadowColor: '#000000',
  font: 'Anton',
  fontSize: 40,
  fontWeight: 'normal',
  textAlign: 'center',
  shadowBlur: 3,
  offsetY: 0,
  offsetX: 0,
  allCaps: true
};

let textOptions = [
  { ...defaultTextOptions }
];

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
      const file = await fileFromUrl({
        url: dataUrl,
        filename: DEFAULT_GENERATED_FILE_NAME,
        mimeType: 'image/png'
      }).catch(err => toastAlert(err.message, 'danger'));

      if (file) {
        webShareComponent.shareFiles = [file];
        webShareComponent.shareUrl = window.location.href;
        webShareComponent.shareTitle = document.title;
        webShareComponent.classList.remove('d-none');
      }
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

  textOptions.forEach(function (item, index) {
    ctx.font = `${item.fontWeight} ${item.fontSize}px ${item.font}`;

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
      lineHeight * multiplier + item.offsetY
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
  if (!file) {
    return;
  }

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
    textOptions[index][prop] = element.checked;
  } else if (element.type === 'number') {
    textOptions[index][prop] = Number(element.value);
  } else {
    textOptions[index][prop] = element.value;
  }

  draw(selectedImage);
};

const onAddTextboxBtnClick = () => {
  const textOptionsLength = textOptions.length;
  const newTextBox = createTextBox(textOptionsLength, defaultTextOptions);

  textOptions.push({ ...defaultTextOptions });
  inputsContainer.appendChild(newTextBox);
  newTextBox.querySelector('[data-input="text"]').focus();
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
    const file = await fileFromUrl({
      url: imageUrl
    }).catch(err => toastAlert(err.message, 'danger'));

    if (file) {
      handleFileSelect(file);
      fileInput.value = fileInput.defaultValue;
    }
  } catch (err) {
    toastAlert(`Failed to load image from "${imageUrl}".`, 'danger');
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('.spinner').classList.add('d-none');
    submitButton.querySelector('.label').classList.remove('d-none');
  }
};

const moveText = (offsetDir, sign, index) => () => {
  const textBoxSection = document.querySelectorAll('[data-section="textBox"]')[index];
  const offsetYInput = textBoxSection.querySelector('[data-input="offsetY"]');
  const offsetXInput = textBoxSection.querySelector('[data-input="offsetX"]');

  if (offsetDir === 'offsetY') {
    if (sign === '-') {
      textOptions[index].offsetY -= 1;
    }

    if (sign === '+') {
      textOptions[index].offsetY += 1;
    }

    offsetYInput.value = textOptions[index].offsetY;
  }

  if (offsetDir === 'offsetX') {
    if (sign === '-') {
      textOptions[index].offsetX -= 1;
    }

    if (sign === '+') {
      textOptions[index].offsetX += 1;
    }

    offsetXInput.value = textOptions[index].offsetX;
  }

  draw(selectedImage);

  reqAnimFrame = requestAnimationFrame(moveText(offsetDir, sign, index));
};

const onUploadMethodChange = evt => {
  uploadMethodEls.forEach(el => el.hidden = el.id !== evt.target.value);
};

const onFileUploadInputChange = evt => {
  imageUrlForm['imageUrl'].value = '';
  handleFileSelect(evt.target.files[0]);
};

const onCanvasPlaceholderDragover = evt => {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy';
};

const onCanvasPlaceholderDrop = evt => {
  evt.stopPropagation();
  evt.preventDefault();

  const fileList = evt.dataTransfer.files;
  const [file] = fileList;

  if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
    return;
  }

  fileInput.value = fileInput.defaultValue;
  imageUrlForm['imageUrl'].value = '';

  handleFileSelect(file);
};

const onInputsContainerInput = evt => {
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
  } else if (element.matches('[data-input="fontWeight"]')) {
    prop = 'fontWeight';
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
};

const onInputsContainerChange = evt => {
  const element = evt.target;
  const index = Number(element.closest('[data-section="textBox"]').getAttribute('data-index'));
  let prop;

  if (element.matches('[data-input="allCaps"]')) {
    prop = 'allCaps';
  }

  if (prop) {
    handleTextPropChange(element, index, prop);
  }
};

const onInputsContainerClick = evt => {
  const element = evt.target;

  if (element.matches('[data-button="settings"]')) {
    const textBoxIndex = element.closest('[data-section="textBox"]').getAttribute('data-index');
    const textBoxEls = document.querySelectorAll('[data-section="textBox"]');

    textBoxEls.forEach((el, index) => {
      const settingsEl = el.querySelector('[data-section="settings"]');

      if (el.getAttribute('data-index') === textBoxIndex) {
        settingsEl.classList.toggle('d-none');
        textOptions[index]._isSettingsOpen = !textOptions[index]._isSettingsOpen;
      } else {
        settingsEl.classList.add('d-none');
        textOptions[index]._isSettingsOpen = false;
      }
    });
  }

  if (element.matches('[data-button="delete-text-box"]')) {
    const index = Number(element.closest('[data-section="textBox"]').getAttribute('data-index'));
    let confirm = true;

    if (textOptions[index].text.trim()) {
      confirm = window.confirm('Are you sure you want to remove this text box?');
    }

    if (confirm) {
      textOptions = arrayRemove(textOptions, index);
      inputsContainer.querySelectorAll('[data-section="textBox"]').forEach(el => el.remove());
      textOptions.forEach((item, index) => inputsContainer.appendChild(createTextBox(index, item)));
      draw(selectedImage);
    }
  }
};

const onInputsContainerPointerdown = evt => {
  const element = evt.target;
  const textBoxEl = element.closest('[data-section="textBox"]');

  if (!textBoxEl) {
    return;
  }

  const index = Number(element.closest('[data-section="textBox"]').getAttribute('data-index'));
  const isOffsetYButton = element.matches('[data-move="offsetY"]');
  const isOffsetXButton = element.matches('[data-move="offsetX"]');

  if (!isOffsetYButton && !isOffsetXButton) {
    return;
  }

  const offsetDir = element.getAttribute('data-move');
  const sign = element.getAttribute('data-sign');

  reqAnimFrame = requestAnimationFrame(moveText(offsetDir, sign, index));
};

const onInputsContainerPointerup = evt => {
  const element = evt.target;
  const isOffsetYButton = element.matches('[data-move="offsetY"]');
  const isOffsetXButton = element.matches('[data-move="offsetX"]');

  if (!isOffsetYButton && !isOffsetXButton) {
    return;
  }

  cancelAnimationFrame(reqAnimFrame);
  reqAnimFrame = null;
};

const onInputsContainerPointerout = evt => {
  const element = evt.target;
  const isOffsetYButton = element.matches('[data-move="offsetY"]');
  const isOffsetXButton = element.matches('[data-move="offsetX"]');

  if (!isOffsetYButton && !isOffsetXButton || !reqAnimFrame) {
    return;
  }

  cancelAnimationFrame(reqAnimFrame);
  reqAnimFrame = null;
};

const onGalleryClick = async evt => {
  const target = evt.target;
  const isButton = target.matches('button');
  const isImage = target.matches('img');

  if (!isButton && !isImage) {
    return;
  }

  const img = isButton ? target.querySelector('img') : target;

  try {
    const file = await fileFromUrl({
      url: img.src
    }).catch(err => toastAlert(err.message, 'danger'));

    if (file) {
      handleFileSelect(file);
      fileInput.value = fileInput.defaultValue;
      imageUrlForm['imageUrl'].value = '';
    }
  } catch (err) {
    toastAlert(`Failed to load image: "${img.alt}".`, 'danger');
  }
};

const onWebShareError = () => {
  toastAlert('There was an error while trying to share your meme.', 'danger');
};

const onCapturePhotoError = evt => {
  console.error(evt.detail.error);
  toastAlert(evt.detail.error.message, 'danger');
};

const onCapturePhotoSuccess = evt => {
  toggleModal(videoModal, false);
  const image = new Image();
  image.addEventListener('load', onImageLoaded);
  image.src = evt.detail.dataURI;

  if (fileInput.value) {
    fileInput.value = fileInput.defaultValue;
    imageUrlForm['imageUrl'].value = '';
    generatedFileName = DEFAULT_GENERATED_FILE_NAME;
  }
};

const onModalClose = evt => {
  if (evt.detail.modalId === 'videoModal') {
    const capturePhotoComponent = videoModal.querySelector('capture-photo');
    capturePhotoComponent.remove();
  }
};

const onDocumentKeyup = evt => {
  if (evt.code !== 'Escape') {
    return;
  }

  if (videoModal.hasAttribute('data-open')) {
    toggleModal(videoModal, false);
  }

  if (downloadModal.hasAttribute('data-open')) {
    toggleModal(downloadModal, false);
  }
};

fileInput.addEventListener('change', onFileUploadInputChange);
openVideoModalBtn.addEventListener('click', onOpenVideoModalButonClick);
closeVideoModalBtn.addEventListener('click', () => toggleModal(videoModal, false));
addTextboxBtn.addEventListener('click', onAddTextboxBtnClick);
generateMemeBtn.addEventListener('click', generateMeme);
downloadMemeBtn.addEventListener('click', () => toggleModal(downloadModal, false));
downloadMemeModalCloseBtn.addEventListener('click', () => toggleModal(downloadModal, false));
imageUrlForm.addEventListener('submit', handleImageUploadFromURL);
canvasPlaceholder.addEventListener('dragover', onCanvasPlaceholderDragover);
canvasPlaceholder.addEventListener('drop', onCanvasPlaceholderDrop);
inputsContainer.addEventListener('input', onInputsContainerInput);
inputsContainer.addEventListener('change', onInputsContainerChange);
inputsContainer.addEventListener('click', onInputsContainerClick);
inputsContainer.addEventListener('pointerdown', onInputsContainerPointerdown);
inputsContainer.addEventListener('pointerup', onInputsContainerPointerup);
inputsContainer.addEventListener('pointerout', onInputsContainerPointerout);
imageUploadMethodSelect.addEventListener('change', onUploadMethodChange);
galleryEl.addEventListener('click', onGalleryClick);
document.addEventListener('web-share:error', onWebShareError);
document.addEventListener('capture-photo:error', onCapturePhotoError);
document.addEventListener('capture-photo:success', onCapturePhotoSuccess);
document.addEventListener('modal-close', onModalClose);
document.addEventListener('keyup', onDocumentKeyup);

textOptions.forEach((item, index) => {
  inputsContainer.appendChild(createTextBox(index, item));
});

fileInput.accept = ACCEPTED_MIME_TYPES.join(',');

customFonts.forEach(({ name, path, style, weight }) => {
  loadCustomFont(name, path, { style, weight });
});
