(() => {
  const refs_about = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs_about.openModalBtn.addEventListener("click", toggleModal);
  refs_about.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs_about.modal.classList.toggle("about__is-hidden");
  }
})();
