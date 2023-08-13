import { Component } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms'

@Component({
  styleUrls: ['./form.component.scss'],
  template: `
    <div class="parent-div">
      <div class="child-div">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <formly-form [form]="form" [fields]="fields" [options]="options"></formly-form>
          <button style="float : right" type="submit" class="btn btn-success" [disabled]="!form.valid">Submit</button>
        </form>
      </div>
    </div>
  `
})
export class FormComponent {
  constructor() { }

  formData: any[] = [ // Dynamic form's json - it will be fed to the formly field config to render on screen 
    {
      "key": "first_name",
      "type": "input",
      "templateOptions": {
        "label": "First Name",
        "placeholder": "Enter your first name",
        "required": true
      }
    },
    {
      "key": "last_name",
      "type": "input",
      "templateOptions": {
        "label": "Last Name",
        "placeholder": "Enter your last name",
        "required": true,
      }
    },
    {
      "key": "email",
      "type": "input",
      "templateOptions": {
        "label": "Email",
        "placeholder": "Enter your email",
        "required": true,
        "type": "email"
      }
    },
    {
      "key": "mobile_number",
      "type": "input",
      "templateOptions": {
        "label": "Mobile Number",
        "placeholder": "Enter your mobile number",
        "required": true,
        "type": "number"
      }
    },
    {
      "key": "message",
      "type": "textarea",
      "templateOptions": {
        "label": "Message",
        "placeholder": "Enter your message",
        "required": true,
      }
    }
  ]

  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = this.formData

  /*We can construct this type of json using some algorithms, 
  and then feed it to it dynamically directly also. 
  ngx-formly supports dynamic addition of fields also*/

  public formvalue: any;
  submit() {
    if (this.form.valid) {
      // Handle form submission
      console.log(this.form.value)
    }
  }

}
