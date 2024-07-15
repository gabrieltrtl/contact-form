const form = document.querySelector('.form');


function validateInputs(event) {
  event.preventDefault();

  let isValid = true;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

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

  const queryType = document.querySelector('input[name="query-type"]:checked');
  if (!queryType) {
    isValid = false;
  }

  

}

form.addEventListener('submit', validateInputs);

