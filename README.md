:pouting_cat:

# cat-form-validator
Simple JS form validator

## Project Structure
    ├── demo                             # Demo Project.
    ├── lib                              # Compiled library ready to use.
    ├── src                              # Source to develop the library.
        ├── utils                        # Functions to improve functionalities.
        ├── validators                   # Functions to validate strings and values.
            ├── validation-types         # Function to validate diferent types (text, number, required, etc).
        ├── Field.js                     # Main function to create a field
        ├── Form.js                      # Main function to create a form

## Use
1. Go to `lib/` directory and copy `cat-form.js` file to your project.
2. Add this line `<script src="path-to-CAT-FORM-in-your-project/cat-form.js"></script>` before `</body>` end tag.
3. Validate some form fields.

### Example of validation
We ar going to validate a form with 2 fields.
- the first field will be a required field and only should has text (No numbers or other characters).
- The second will be a required field only.

#### Your HTML file
```html
<form action="">
  <div class="field">
    <label for="nameField">Name</label>
    <input type="text" name="nameField" id="nameField">
    <div id="nameFieldError">Field Required</div>
  </div>
  <div class="field">
    <label for="lastNameField">Last Name</label>
    <input type="text" name="lastNameField" id="lastNameField">
    <div id="lastNameFieldError">Field Required</div>
  </div>

  <button type="submit" id="submitForm">Send</button>
</form>

```

#### Your JS file
```js
// Crate a form
var form = new catForm.CreateForm([
    {
      field: document.querySelector('#nameField'), // Html Input to validate
      validations: [ // List of types of validations
        'required', // Type of validation
        'text'      // Type of validation
      ],
      onEvent: 'blur' // Event that trigger the validation
    },
    {
      field: document.querySelector('#lastNameField'), // Html Input to validate
      validations: [
        'required'    // Type of validation
      ],
      onEvent: 'blur' // Event that trigger the validation
    }
  ]
);

// Validate form with listeners (When onEven be triggered).
form.validateWithEventListener();

// Validate form (When submit button be pressed).
document.querySelector('#submitForm').addEventListener('click', function(e) {
  e.preventDefault()
  form.validate();
})
````

## Options :smirk_cat:
Option | Type | Description
------ | ---- | -----------
field  | HTML Element | The input or field that you want to validate
validations  | Array<string> | A list of type of validations for the input or field
onEvent  | string | Name of the event that you want to trigger a validation on an input or field


## Develop
### How to run develop
1. `npm install`
2. `npm run dev`. This start webpack and eslint.

Now you can edit the files in `src/`. With each change o them webpack deploy a `lib/cat-form.js` with your changes.

### How to run for production
1. `npm install`
2. `npm run build`. This will compile es6+ to es5 and minify the `lib/cat-form.js` for using on a webpage.

### How to run Demo
1. `cd demo`
2. `npm install`
3. `npm start` This makes the dist directory with the demo. Now, you cant go to http://localhost:8080.

---

:smile_cat:
