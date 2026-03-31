const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
      "Thank you! Your booking request has been received. We will contact you soon to confirm your appointment.";

    bookingForm.reset();
  });
}
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (galleryImages.length && lightbox && lightboxImage && lightboxClose) {
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add("active");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
}