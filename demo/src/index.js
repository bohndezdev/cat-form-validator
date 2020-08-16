// First call the library
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
      field: document.querySelector('#emailField'),
      invalidMessageElement: document.querySelector('#emailFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'This field is required'
        },
        {
          type: 'email',
          invalidMessage: 'Must be a valid email address'
        },
      ],
      onEvent: 'blur'
    },
    {
      field: document.querySelector('#descriptionField'),
      invalidMessageElement: document.querySelector('#descriptionFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'You must describe your cat'
        },
        {
          type: 'text',
          invalidMessage: 'This field is only for text'
        },
      ],
      onEvent: 'blur'
    },
    {
      field: document.querySelector('#checkboxField'),
      invalidMessageElement: document.querySelector('#checkboxFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'You must check it'
        },
      ],
      onEvent: 'change'
    },
    {
      field: document.querySelector('#radioField'),
      invalidMessageElement: document.querySelector('#radioFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'You must choose one'
        },
      ],
      onEvent: 'change'
    },
    {
      field: document.getElementsByName('myOptions2'),
      invalidMessageElement: document.querySelector('#radioFieldError2'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'You must choose one'
        },
      ],
      onEvent: 'change'
    },
    {
      field: document.querySelector('#selectField'),
      invalidMessageElement: document.querySelector('#selectFieldError'),
      validations: [
        {
          type: 'required',
          invalidMessage: 'You must choose one pet'
        },
      ],
      onEvent: 'change'
    },
  ]
);

// Validate form (when submit button be pressed).
document.querySelector('#submitForm').addEventListener('click', function(e) {
  e.preventDefault()
  console.log(form.validate()); // Validate Form and show its status con console.
});