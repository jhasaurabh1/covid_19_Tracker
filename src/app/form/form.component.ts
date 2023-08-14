import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  styleUrls: ['./form.component.scss'],
  template: `
    <div class="parent-div">
      <div class="child-div">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <formly-form [form]="form" [fields]="fields" [options]="options"></formly-form>
          <button style="float : right" type="submit" class="btn btn-success" [disabled]="form.invalid">Submit</button>
        </form>
      </div>
    </div>
  `
})
export class FormComponent implements OnInit {
  constructor() {}

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit() {
    this.fields = this.constructFormFields(this.formData);
  }

  private constructFormFields(formData: any[]): FormlyFieldConfig[] {
    return formData.map(item => ({
      key: item.key,
      type: item.type,
      templateOptions: {
        label: item.templateOptions.label,
        placeholder: item.templateOptions.placeholder,
        required: item.templateOptions.required,
        type: item.templateOptions.type || 'text'
      }
    }));
  }

  formData: any[] = [ // Dynamic form's json - it will be fed to the formly field config to render on screen 
    {
      "key": "first_name",
      "type": "input",
      "templateOptions": {
        "label": "First Name ",
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
      "key": "subject",
      "type": "input",
      "templateOptions": {
        "label": "Subject",
        "placeholder": "Enter the subject for your message",
        "required": true,
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

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
