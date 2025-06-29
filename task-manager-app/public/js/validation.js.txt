function validateForm() {
  const email = document.querySelector('input[name=email]').value;
  const mobile = document.querySelector('input[name=mobile]').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email");
    return false;
  }

  if (!mobileRegex.test(mobile)) {
    alert("Invalid mobile number");
    return false;
  }

  return true;
}
