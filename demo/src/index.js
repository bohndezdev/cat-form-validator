import { CreateForm } from 'cat-form-validator';

const saludar = (nombre) => {
  console.log(`Hola ${nombre}`)
}

saludar('Boris!!!')


  // Crate a form
const form = new CreateForm(
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