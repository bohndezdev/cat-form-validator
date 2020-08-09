import { CreateCatForm } from 'cat-form-validator';

// Crate a form
const form = new CreateCatForm(
  [
    {
      field: document.querySelector('#nameField'),
      invalidMessageElement: document.querySelector('#nameFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'This field is required'
        },
        {
          type: 'text',
          invalidMessage: 'This field is only for text'
        },
      ],
      onEvent: 'blur'
    },
    {
      field: document.querySelector('#lastNameField'),
      invalidMessageElement: document.querySelector('#lastNameFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'This field is required'
        },
      ],
      onEvent: 'blur'
    },
    {
      field: document.querySelector('#claimField'),
      invalidMessageElement: document.querySelector('#claimFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'You must write your claim'
        },
      ],
      onEvent: 'blur'
    }
  ]
);

// Validate form with listeners
// form.validateWithEventListener();

// Validate form
document.querySelector('#submitForm').addEventListener('click', function(e) {
  e.preventDefault()
  form.validate();
})