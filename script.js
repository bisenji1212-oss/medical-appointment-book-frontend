
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
// Signup
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup successful! Please login.");
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "index.html"; // medical page
  } else {
    alert("Invalid email or password");
  }
});
