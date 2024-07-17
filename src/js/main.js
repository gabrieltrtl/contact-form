const form = document.querySelector('.form');


function validateInputs(event) {
  event.preventDefault();

  let isValid = true;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

  // First Name Validation
  const firstName = document.getElementById('first-name');
  if (firstName.validity.valueMissing) {
    isValid = false;
  } else if (!nameRegex.test(firstName.value)) {
    isvalid = false;
  }

  // Last Name Validation
  const lastName = document.getElementById('last-name');
  if (lastName.validity.valueMissing) {
    isValid = false;
  } else if (!nameRegex.test(firstName.value)) {
    isValid = false;
  }

  // E-mail Verification
  const email = document.getElementById('email');
  if (!email.validity.valid) {
    isValid = false;
  }

  // Query Validation
  const queryType = document.querySelector('input[name="query-type"]:checked');
  if (!queryType) {
    isValid = false;
  }

  // Message Validation
  const message = document.getElementById('message');
  if (message.validity.valueMissing) {
    isValid = false;
  }

  // Consent Validation
  const consent = document.getElementById('consent');
  if (!consent.checked) {
    isValid = false;
  }

  
  if(isValid) {

  }
  

}

form.addEventListener('submit', validateInputs);

