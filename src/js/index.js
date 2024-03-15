import 'emoji-picker-element';
import insertTextAtCursor from 'insert-text-at-cursor';
import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/capture-photo-element/dist/capture-photo-defined.js';
import '@georapbox/modal-element/dist/modal-element-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import { arrayRemove } from './utils/array-remove.js';
import { uid } from './utils/uid.js';
import { ACCEPTED_MIME_TYPES } from './constants.js';
import { customFonts, loadCustomFont } from './custom-fonts.js';
import { fileFromUrl } from './file-from-url.js';
import { toastAlert } from './toast-alert.js';
import { createTextBox } from './create-text-box.js';
import { drawCanvas } from './draw-canvas.js';

const videoModal = document.getElementById('videoModal');
const downloadModal = document.getElementById('downloadModal');
const canvas = document.getElementById('canvas');
const dropzoneEl = document.querySelector('files-dropzone');
const instructionsEl = document.getElementById('instructions');
const ctx = canvas.getContext('2d');
const imageUploadMethodSelect = document.getElementById('imageUploadMethodSelect');
const fileSelectBtn = document.getElementById('fileSelectBtn');
const imageUrlForm = document.getElementById('imageUrlForm');
const addTextboxBtn = document.getElementById('addTextboxBtn');
const inputsContainer = document.getElementById('inputsContainer');
const generateMemeBtn = document.getElementById('generateMemeBtn');
const openVideoModalBtn = document.getElementById('openVideoModalBtn');
const downloadMemeBtn = document.getElementById('downloadMemeBtn');
const downloadMemePreview = document.getElementById('downloadMemePreview');
const webShareComponent = document.querySelector('web-share');
const galleryEl = document.getElementById('gallery');
const gallerySearchEl = document.getElementById('gallerySearch');
const galleryNoResultsEl = galleryEl.querySelector('.gallery__no-results');
const solidColorForm = document.getElementById('solidColorForm');
const uploadMethodEls = document.querySelectorAll('.upload-method');
const removeConfirmationModal = document.getElementById('removeConfirmationModal');
const removeTextForm = document.getElementById('removeTextForm');
let selectedImage = null;
let reqAnimFrame = null;

const defaultTextOptions = {
  text: '',
  fillColor: '#ffffff',
  shadowColor: '#000000',
  font: 'Pressuru',
  fontSize: 40,
  fontWeight: 'normal',
  textAlign: 'center',
  shadowBlur: 3,
  borderWidth: 1,
  offsetY: 0,
  offsetX: 0,
  rotate: 0,
  allCaps: true
};

let textOptions = [
  { ...defaultTextOptions }
];

const generateMeme = async () => {
  const dataUrl = canvas.toDataURL('image/png');

  // Prepare download link
  const downloadLink = dataUrl.replace('image/png', 'image/octet-stream');
  downloadMemeBtn.download = `${uid('meme')}.png`;
  downloadMemeBtn.href = downloadLink;
  downloadMemePreview.width = canvas.width;
  downloadMemePreview.height = canvas.height;
  downloadMemePreview.src = downloadLink;

  // Prepare for sharing file
  if (isWebShareSupported()) {
    try {
      const file = await fileFromUrl({
        url: dataUrl,
        filename: `${uid('meme')}.png`,
        mimeType: 'image/png'
      }).catch(err => toastAlert(err.message, 'danger'));

      if (file && isWebShareSupported({ files: [file] })) {
        webShareComponent.shareFiles = [file];
        webShareComponent.hidden = false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  window.requestAnimationFrame(() => {
    downloadModal.open = true;
  });
};

const onImageLoaded = evt => {
  const MAX_WIDTH = 4000;
  const MAX_HEIGHT = 3000;
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

  selectedImage = evt.target;

  drawCanvas(selectedImage, canvas, ctx, textOptions);

  dropzoneEl.classList.add('dropzone--accepted');
  generateMemeBtn.disabled = false;
  canvas.hidden = false;
  instructionsEl.hidden = true;
};

const removeText = index => {
  textOptions = arrayRemove(textOptions, index);

  const textBoxEl = inputsContainer.querySelector(`[data-section="textBox"][data-index="${index}"]`);
  textBoxEl && textBoxEl.remove();

  const textBoxEls = inputsContainer.querySelectorAll('[data-section="textBox"]');
  textBoxEls.forEach((el, idx) => el.setAttribute('data-index', idx));

  drawCanvas(selectedImage, canvas, ctx, textOptions);
};

const handleSolidColorFormInput = evt => {
  const DEFAULT_WIDTH = 600;
  const DEFAULT_HEIGHT = 400;

  if (evt.target === solidColorForm['canvasColor']) {
    selectedImage = evt.target.value;
  }

  if (typeof selectedImage === 'string') {
    canvas.width = Number(solidColorForm['canvasWidth'].value) || DEFAULT_WIDTH;
    canvas.height = Number(solidColorForm['canvasHeight'].value) || DEFAULT_HEIGHT;

    drawCanvas(selectedImage, canvas, ctx, textOptions);

    generateMemeBtn.disabled = false;
    canvas.hidden = false;
    instructionsEl.hidden = true;
  }
};

const handleFileSelect = file => {
  if (!file) {
    return;
  }

  const image = new Image();
  const reader = new FileReader();

  reader.addEventListener('load', function (evt) {
    const data = evt.target.result;
    image.addEventListener('load', onImageLoaded);
    image.src = data;
  });

  reader.readAsDataURL(file);
};

const handleOpenVideoModalButtonClick = () => {
  videoModal.open = true;
};

const handleTextPropChange = (element, index, prop) => {
  if (element.type === 'checkbox') {
    textOptions[index][prop] = element.checked;
  } else if (element.type === 'number') {
    textOptions[index][prop] = Number(element.value);
  } else {
    textOptions[index][prop] = element.value;
  }

  drawCanvas(selectedImage, canvas, ctx, textOptions);
};

const handleAddTextboxBtnClick = () => {
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
  submitButton.querySelector('.spinner').hidden = false;
  submitButton.querySelector('.label').hidden = true;

  try {
    const file = await fileFromUrl({
      url: imageUrl
    }).catch(err => toastAlert(err.message, 'danger'));

    if (file) {
      handleFileSelect(file);
    }
  } catch (err) {
    toastAlert(`Failed to load image from "${imageUrl}".`, 'danger');
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('.spinner').hidden = true;
    submitButton.querySelector('.label').hidden = false;
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

  drawCanvas(selectedImage, canvas, ctx, textOptions);

  reqAnimFrame = requestAnimationFrame(moveText(offsetDir, sign, index));
};

const handleUploadMethodChange = evt => {
  uploadMethodEls.forEach(el => el.hidden = el.id !== evt.target.value);
};

const handleFileSelectClick = () => {
  if (typeof dropzoneEl.openFileDialog === 'function') {
    dropzoneEl.openFileDialog();
  }
};

const handleDropFilesAccepted = evt => {
  const [file] = evt.detail.acceptedFiles;

  if (file) {
    handleFileSelect(file);
  }
};

const handleInputsContainerInput = evt => {
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
  } else if (element.matches('[data-input="rotate"]')) {
    prop = 'rotate';
  } else if (element.matches('[data-input="borderWidth"]')) {
    prop = 'borderWidth';
  }

  if (prop) {
    handleTextPropChange(element, index, prop);
  }
};

const handleInputsContainerChange = evt => {
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

const handleInputsContainerClick = evt => {
  const element = evt.target;

  if (element.matches('[data-button="settings"]')) {
    const textBoxEl = element.closest('[data-section="textBox"]');
    const textBoxSettingsEl = textBoxEl?.querySelector('[data-section="settings"]');

    if (textBoxSettingsEl) {
      textBoxSettingsEl.hidden = !textBoxSettingsEl.hidden;
    }
  }

  if (element.matches('[data-button="duplicate-text-box"')) {
    const currentTextBoxIndex = element.closest('[data-section="textBox"]').getAttribute('data-index');

    textOptions.push({
      ...textOptions[currentTextBoxIndex]
    });

    const newTextBox = createTextBox(textOptions.length - 1, textOptions[textOptions.length - 1]);

    inputsContainer.appendChild(newTextBox);
    newTextBox.querySelector('[data-input="text"]').focus();
    drawCanvas(selectedImage, canvas, ctx, textOptions);
  }

  if (element.matches('[data-button="delete-text-box"]')) {
    const index = Number(element.closest('[data-section="textBox"]').getAttribute('data-index'));

    if (textOptions[index].text.trim()) {
      const textIndexInput = removeTextForm['text-index'];

      if (textIndexInput) {
        textIndexInput.value = index;
        removeConfirmationModal.open = true;
      }
    } else {
      removeText(index);
    }
  }
};

const handleTextRemoveFormSubmit = evt => {
  evt.preventDefault();
  const index = Number(evt.target['text-index'].value);

  if (index >= 0) {
    removeText(index);
    removeConfirmationModal.open = false;
  }
};

const handleInputsContainerPointerdown = evt => {
  const element = evt.target;
  const textBoxEl = element.closest('[data-section="textBox"]');

  if (!textBoxEl) {
    return;
  }

  const index = Number(textBoxEl.getAttribute('data-index'));

  if (element.matches('[data-move="offsetY"]') || element.matches('[data-move="offsetX"]')) {
    const offsetDir = element.getAttribute('data-move');
    const sign = element.getAttribute('data-sign');
    reqAnimFrame = requestAnimationFrame(moveText(offsetDir, sign, index));
  }
};

const handleInputsContainerPointerup = evt => {
  const element = evt.target;

  if (element.matches('[data-move="offsetY"]') || element.matches('[data-move="offsetX"]')) {
    cancelAnimationFrame && cancelAnimationFrame(reqAnimFrame);
    reqAnimFrame = null;
  }
};

const handleInputsContainerPointerout = evt => {
  const element = evt.target;

  if (element.matches('[data-move="offsetY"]') || element.matches('[data-move="offsetX"]')) {
    cancelAnimationFrame && cancelAnimationFrame(reqAnimFrame);
    reqAnimFrame = null;
  }
};

const handleInputsContainerKeyDown = evt => {
  const element = evt.target;
  const textBoxEl = element.closest('[data-section="textBox"]');

  if (element.matches('[data-move="offsetY"]') || element.matches('[data-move="offsetX"]')) {
    if (evt.key === ' ' || evt.key === 'Enter') {
      const index = Number(textBoxEl.getAttribute('data-index'));
      const offsetDir = element.getAttribute('data-move');
      const sign = element.getAttribute('data-sign');

      reqAnimFrame && cancelAnimationFrame(reqAnimFrame);
      reqAnimFrame = requestAnimationFrame(moveText(offsetDir, sign, index));
    }
  }
};

const handleInputsContainerKeyUp = evt => {
  const element = evt.target;

  if (element.matches('[data-move="offsetY"]') || element.matches('[data-move="offsetX"]')) {
    if (evt.key === ' ' || evt.key === 'Enter') {
      reqAnimFrame && cancelAnimationFrame(reqAnimFrame);
      reqAnimFrame = null;
    }
  }
};

const handleGalleryClick = async evt => {
  const button = evt.target.closest('button');

  if (!button) {
    return;
  }

  const img = button.querySelector('img');

  try {
    const file = await fileFromUrl({
      url: img.src
    }).catch(err => toastAlert(err.message, 'danger'));

    if (file) {
      handleFileSelect(file);
    }
  } catch (err) {
    toastAlert(`Failed to load image: "${img.alt}".`, 'danger');
  }
};

const handleGallerySearchInput = evt => {
  const query = evt.target.value.toLowerCase().trim();
  const galleryItems = galleryEl.querySelectorAll('button');

  galleryItems.forEach(item => {
    const alt = (item.querySelector('img').getAttribute('alt') || '').toLowerCase();
    item.hidden = !alt.includes(query);
  });

  galleryNoResultsEl.hidden = !!galleryEl.querySelector('button:not([hidden])');
};

const handleWebShareError = () => {
  downloadModal.open = false;
  toastAlert('There was an error while trying to share your meme.', 'danger');
};

const handleCapturePhotoError = evt => {
  const error = evt.detail.error;
  let errorMessage = 'An error occurred while trying to capture photo.';

  if (error instanceof Error && (error.name === 'NotAllowedError' || error.name === 'NotFoundError')) {
    errorMessage += ' Make sure you have a camera connected and you have granted the appropriate permissions.';
  }

  toastAlert(errorMessage, 'danger');
  videoModal.open = false;
  console.error(error);
};

const handleCapturePhotoSuccess = evt => {
  videoModal.open = false;
  const image = new Image();
  image.addEventListener('load', onImageLoaded);
  image.src = evt.detail.dataURI;
};

const handleModalOpen = evt => {
  if (evt.target.id === 'videoModal') {
    const capturePhotoComponent = videoModal.querySelector('capture-photo');

    if (capturePhotoComponent && typeof capturePhotoComponent.startVideoStream === 'function') {
      capturePhotoComponent.startVideoStream();
    }
  }
};

const handleModalClose = evt => {
  if (evt.target.id === 'videoModal') {
    const capturePhotoComponent = videoModal.querySelector('capture-photo');

    if (capturePhotoComponent && typeof capturePhotoComponent.stopVideoStream === 'function') {
      capturePhotoComponent.stopVideoStream();
    }
  }

  if (evt.target.id === 'removeConfirmationModal') {
    removeTextForm.reset();
  }
};

const handleEmojiPickerSelection = evt => {
  const textBoxEl = evt.target.closest('[data-section="textBox"]');

  if (textBoxEl) {
    const input = textBoxEl.querySelector('[data-input="text"]');
    const emoji = evt.detail.unicode;

    if (input) {
      insertTextAtCursor(input, emoji);
    }
  }
};

fileSelectBtn.addEventListener('click', handleFileSelectClick);
openVideoModalBtn.addEventListener('click', handleOpenVideoModalButtonClick);
addTextboxBtn.addEventListener('click', handleAddTextboxBtnClick);
generateMemeBtn.addEventListener('click', generateMeme);
downloadMemeBtn.addEventListener('click', () => downloadModal.open = false);
imageUrlForm.addEventListener('submit', handleImageUploadFromURL);
dropzoneEl.addEventListener('files-dropzone-drop-accepted', handleDropFilesAccepted);
inputsContainer.addEventListener('input', handleInputsContainerInput);
inputsContainer.addEventListener('change', handleInputsContainerChange);
inputsContainer.addEventListener('click', handleInputsContainerClick);
inputsContainer.addEventListener('pointerdown', handleInputsContainerPointerdown);
inputsContainer.addEventListener('pointerup', handleInputsContainerPointerup);
inputsContainer.addEventListener('pointerout', handleInputsContainerPointerout);
inputsContainer.addEventListener('keydown', handleInputsContainerKeyDown);
inputsContainer.addEventListener('keyup', handleInputsContainerKeyUp);
imageUploadMethodSelect.addEventListener('change', handleUploadMethodChange);
galleryEl.addEventListener('click', handleGalleryClick);
gallerySearchEl.addEventListener('input', handleGallerySearchInput);
solidColorForm.addEventListener('input', handleSolidColorFormInput);
document.addEventListener('web-share:error', handleWebShareError);
document.addEventListener('capture-photo:error', handleCapturePhotoError);
document.addEventListener('capture-photo:success', handleCapturePhotoSuccess);
document.addEventListener('me-open', handleModalOpen);
document.addEventListener('me-close', handleModalClose);
document.addEventListener('emoji-click', handleEmojiPickerSelection);
removeTextForm.addEventListener('submit', handleTextRemoveFormSubmit);

galleryEl.querySelectorAll('button > img')?.forEach(image => {
  image.setAttribute('title', image.getAttribute('alt'));
});

textOptions.forEach((item, index) => {
  inputsContainer.appendChild(createTextBox(index, item));
});

dropzoneEl.accept = ACCEPTED_MIME_TYPES;

customFonts.forEach(({ name, path, style, weight }) => {
  loadCustomFont(name, path, { style, weight });
});
