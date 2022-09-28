export const toggleModal = (modalEl, visible) => {
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
