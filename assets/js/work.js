const workButtons = document.querySelectorAll(".work__details-btn");
const workModals = document.querySelectorAll(".work__modal");
const workCloses = document.querySelectorAll(".work__modal-close");
const workCloseBtns = document.querySelectorAll(".work__modal-close-btn");

// Open modal
workButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.querySelector(`.work__modal[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.add("active-modal");
      document.body.style.overflow = "hidden";
    }
  });
});

// Close modal - X button
workCloses.forEach((close) => {
  close.addEventListener("click", () => {
    closeAllModals();
  });
});

// Close modal - Close button
workCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeAllModals();
  });
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  workModals.forEach((modal) => {
    if (e.target === modal) {
      closeAllModals();
    }
  });
});

// Close with Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllModals();
  }
});

function closeAllModals() {
  workModals.forEach((modal) => {
    modal.classList.remove("active-modal");
  });
  document.body.style.overflow = "";
}

// Gallery - Change main image
function changeImage(modalId, thumb) {
  const mainImg = document.getElementById(`mainImg-${modalId}`);
  const thumbnails = thumb.parentElement.querySelectorAll('.work__modal-thumb');
  
  // Update main image
  mainImg.src = thumb.src;
  
  // Update active class
  thumbnails.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}