function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// function to hide the modal
function closeModal() {
  modalbg.style.display = "none";
}

// selecting close button in the modal
const closeModalBtn = document.querySelector(".close");

// add event listener to close button
closeModalBtn.addEventListener("click", closeModal);




function validate() {
  console.log("testValidateform")
  let isValid = true;

  // clean error messages
  document.querySelectorAll('.error-message').forEach(e => e.textContent = '');

  // validate name
  const firstName = document.getElementById('first').value;
  if (firstName.length < 2) {
    document.getElementById('error-first').textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    isValid = false;
  }

  // validate lastname
  const lastName = document.getElementById('last').value;
  if (lastName.length < 2) {
    document.getElementById('error-last').textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    isValid = false;
  }

  // validate email
  const email = document.getElementById('email').value;
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    document.getElementById('error-email').textContent = 'Vous devez entrer une adresse e-mail valide.';
    isValid = false;
  }

  // validate number tournois
  const quantity = document.getElementById('quantity').value;
  if (isNaN(quantity) || quantity < 0 || quantity === '') {
    document.getElementById('error-quantity').textContent = 'Veuillez entrer un nombre valide.';
    isValid = false;
  }

  // validate select tournois
  const locationChecked = document.querySelector('input[name="location"]:checked');
  if (!locationChecked) {
    document.getElementById('error-location').textContent = 'Vous devez choisir une option.';
    isValid = false;
  }

  // validate general conditions
  const termsChecked = document.getElementById('checkbox1').checked;
  if (!termsChecked) {
    document.getElementById('error-terms').textContent = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    isValid = false;
  }

  if (isValid) {
    // show confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    // hide form
    // modalbg.style.display = 'none';

    // reset form
    document.forms['reserve'].reset();

    // no submit form if not valid
    return false;
  }

  return isValid;
}