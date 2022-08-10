(() => {
  const refs = {
    openFranchiseModalBtn: document.querySelector('[data-contacts_modal-open]'),
    closeFranchiseModalBtn: document.querySelector('[data-contacts_modal-close]'),
    modal: document.querySelector('[data-contacts_modal]'),
  };

  refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    
  }
})();