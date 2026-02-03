function sendOTP() {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    alert("Enter username first");
    return;
  }

  // Generate 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Save OTP temporarily
  localStorage.setItem("otp", otp);
  localStorage.setItem("otpUser", username);

  alert("Your OTP is: " + otp); // demo purpose

  document.getElementById("otpBox").style.display = "block";
}
function verifyOTP() {
  const userOTP = document.getElementById("otpInput").value;
  const savedOTP = localStorage.getItem("otp");

  if (userOTP === savedOTP) {
    alert("OTP Verified Successfully");

    // Create login session
    localStorage.setItem("session", JSON.stringify({
      role: "user",
      voted: false
    }));

    // Clear OTP
    localStorage.removeItem("otp");

    location.href = "vote.html";
  } else {
    alert("Invalid OTP");
  }
}
