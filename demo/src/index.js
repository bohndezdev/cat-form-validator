import { CreateCatForm } from 'cat-form-validator';

// Crate a form
const form = new CreateCatForm(
  [
    {
      field: document.querySelector('#nameField'),
      validations: [
        'required',
        'text'
      ],
      onEvent: 'blur'
    },
    {
      field: document.querySelector('#lastNameField'),
      validations: [
        'required'
      ],
      onEvent: 'blur'
    }
  ]
);

// Validate form with listeners
form.validateWithEventListener();

// Validate form
document.querySelector('#submitForm').addEventListener('click', function(e) {
  e.preventDefault()
  form.validate();
})