document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic validation
  if (
    !this.patient_name.value ||
    !this.patient_email.value ||
    !this.gender.value ||
    !this.doctor.value ||
    !this.appointment_date.value ||
    !this.appointment_time.value
  ) {
    alert("❌ Please fill all the fields");
    return;
  }

  // Send email using EmailJS
  emailjs.sendForm(
    "service_gwdbzfx",      // your service ID
    "template_w6h1w0m",     // your template ID
    this
  ).then(
    () => {
      alert("✅ Appointment booked & email sent successfully!");
      this.reset();
    },
    (error) => {
      console.error("FAILED...", error);
      alert("❌ Email sending failed");
    }
  );
});
