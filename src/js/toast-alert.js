const errorsContainer = document.getElementById('errorsContainer');

const hideError = evt => {
  const target = evt.currentTarget;
  target.removeEventListener('click', hideError);
  errorsContainer.removeChild(target.parentNode);
};

export const toastAlert = (message = '', type = 'info') => {
  const types = ['info', 'warning', 'danger'];

  if (!types.includes(type)) {
    type = 'info';
  }

  const template = /* html */ `
    ${message}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
  `;

  const div = document.createElement('div');
  div.className = `alert alert-${type} alert-dismissible text-break mb-2 fade`;
  div.innerHTML = template;
  div.querySelector('button').addEventListener('click', hideError);
  errorsContainer.appendChild(div);
  setTimeout(() => div.classList.add('show'), 100);
};
