(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-about]"),
    closeModalBtn: document.querySelector("[data-modal-close-about]"),
    about_modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.about_modal.classList.toggle("about__is-hidden");
  }
})();
