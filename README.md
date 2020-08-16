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
1. Install the library: `npm install cat-form-validator --save`.
2. Import where you want `import { CreateCatForm } from 'cat-form-validator';`
3. Create `form` in your html file.
4. Make your validatons.

### Example of validation
We ar going to validate a form with 2 fields.
- the first field will be a required field and only should has text (No numbers or other characters).
- The second will be a required field only.

#### Your HTML file
```html
<form action="">
  <div class="field">
    <label for="nameField">Your cat's name</label>
    <input type="text" name="nameField" id="nameField" placeholder="First name">
    <div id="nameFieldError"></div>
  </div>
  <div class="field">
    <label for="lastNameField">Your cat's last name</label>
    <input type="text" name="lastNameField" id="lastNameField" placeholder="Last name">
    <div id="lastNameFieldError"></div>
  </div>
  <div class="field">
    <label for="emailField">Ypur cat's email</label>
    <input type="text" name="emailField" id="emailField" placeholder="mail@mail.cl">
    <div id="emailFieldError"></div>
  </div>
  <div class="field">
    <label for="descriptionField">Description of your cat</label>
    <textarea name="descriptionField" id="descriptionField" cols="30" rows="10"></textarea>
    <div id="descriptionFieldError"></div>
  </div>
  <div class="field">
    <input type="checkbox" name="checkboxField" id="checkboxField" value="ok">
    <label for="checkboxField">Do you like cats?</label>
    <div id="checkboxFieldError"></div>
  </div>
  <div class="field">
    <input name="radioField" type="radio" value="one" id="radioField"> I love cats.
    <div id="radioFieldError"></div>
  </div>
  <div class="field">
    <label>How many cats do you have?</label> <br>
    <input name="myOptions2" type="radio" value="one"> one
    <input name="myOptions2" type="radio" value="two"> two
    <input name="myOptions2" type="radio" value="three"> three
    <div id="radioFieldError2"></div>
  </div>
  <div class="field">
    <select name="selectField" id="selectField">
        <option value="">Choose your pet</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Duck">Duck</option>
    </select>
    <div id="selectFieldError"></div>
  </div>

  <button type="submit" id="submitForm">Send</button>
</form>

```

#### Your JS file
```js
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
```

### Import on <script> tag
If you want to use it imported in a `<script>` tag:
1. Import the library `<script src="route-to-library/cat-form.js">` before `</body>` tag.
2. Use `catForm` object to create a form. Example:
  ```js
  <script src="route-to-library/cat-form.js"></script>
  <script>
    const myForm = new catForm.CreateCatForm([args]);
  </script>
  ```

## Options :smirk_cat:
Option | Type | Description
------ | ---- | -----------
field  | HTML Element | The input or field that you want to validate
invalidMessageElement  | HTML Element | The element to insert the error message
validations  | Array<object> | A list of type of validations for the input or field
onEvent  | string | Name of the event that you want to trigger a validation on an input or field

### Suported Fields
For now those are the fields types that you can validate:
* input `<input type="text">`
* input `<input type="checkbox">`
* input `<input type="radio">`
* textarea `<textarea>`
* select `<select>`

### Validations
An example of an object for the Array validations:
```js
{
  type: 'required',
  invalidMessage: 'This field is required'
}
```

#### Types accepted:
  * 'required'
  * 'text'
  * 'radio'  (Same as required)
  * 'checkbox'  (Same as required)
  * 'email'
  * 'select' (Same as required)

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

##  Version Control
This project is manage with Git Flow

---

:smile_cat:
