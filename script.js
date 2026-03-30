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