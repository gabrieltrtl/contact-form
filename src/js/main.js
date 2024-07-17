const form = document.querySelector('.form');


function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(errorElement => {
    errorElement.style.display = 'none';
  })
}

function displayError(inputElement, message) {
  const group = inputElement.closest('.form__group');
  const errorMsg = group.querySelector('.error-msg');
  errorMsg.textContent = message;
  errorMsg.style.display = 'block';
}

function validateInputs(event) {
  event.preventDefault();

  let isValid = true;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

  // Clear Errors Before Validation
  clearErrors();

  // First Name Validation
  const firstName = document.getElementById('first-name');
  if (firstName.validity.valueMissing) {
    isValid = false;
    displayError(firstName, "This field is required")
  } else if (!nameRegex.test(firstName.value)) {
    isValid = false;
    displayError(firstName, "Invalid format")
  }

  // Last Name Validation
  const lastName = document.getElementById('last-name');
  if (lastName.validity.valueMissing) {
    isValid = false;
    displayError(lastName, "This field is required")
  } else if (!nameRegex.test(lastName.value)) {
    isValid = false;
    displayError(lastName, "Invalid format")
  }

  // E-mail Verification
  const email = document.getElementById('email');
  if (email.validity.valueMissing) {
    isValid = false;
    displayError(email, "This field is required")
  } else if (email.validity.typeMismatch) {
    isValid = false;
    displayError(email, "Please enter a valid email address")
  }

  // Query Validation
  const queryTypeFieldset = document.querySelector('.query-type')
  const queryTypeRadios = queryTypeFieldset.querySelectorAll('input[name="query-type"]');

  let queryTypeChecked = false;

  queryTypeRadios.forEach(radio => {
    if(radio.checked) {
      queryTypeChecked = true;
    }
  })
  if (!queryTypeChecked) {
    isValid = false;
    displayError(queryTypeFieldset, "Please select a query type");
}

  // Message Validation
  const message = document.getElementById('message');
  if (message.validity.valueMissing) {
    isValid = false;
    displayError(message, "This field is required");
  }

  // Consent Validation
  const consent = document.getElementById('consent');
  if (!consent.checked) {
    isValid = false;
    displayError(consent, "To submit this form, please consent to being contacted");
  }

  
  if(isValid) {
    document.querySelector('.success-msg').style.display = "block";
    form.reset();
  }
  

}

form.addEventListener('submit', validateInputs);

