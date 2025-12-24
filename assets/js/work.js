const workButtons = document.querySelectorAll(".work__details-btn");
const workModals  = document.querySelectorAll(".work__modal");
const workCloses  = document.querySelectorAll(".work__modal-close");

workButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    workModals[i].classList.add("active-modal");
  });
});

workCloses.forEach((close) => {
  close.addEventListener("click", () => {
    workModals.forEach(m => m.classList.remove("active-modal"));
  });
});


workModals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if(e.target === modal) modal.classList.remove("active-modal");
  });
});