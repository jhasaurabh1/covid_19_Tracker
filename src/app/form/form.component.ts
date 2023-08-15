import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: `
    <div class="parent-div">
      <div class="child-div">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
          <button type="submit" class="btn btn-success" style="float: right;">Submit</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .parent-div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .child-div {
      width: 100%;
      padding: 25px;
      border: 1px solid #ccc;
      overflow-y: auto;
      max-height: 60vh;
      height: 60vh;
    } 
  `]
})
export class FormComponent implements OnInit {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  model: any = {};

  ngOnInit() {
    const jsonData = {
      "first_name": "saurabh",
      "last_name": "saurabh",
      "email": "hah",
      "mobile_number": 22292,
      "subject": "122",
      "message": "jwjwjw"
    };

    this.fields = this.constructFormFields(this.mapJsonToFormlyConfig(jsonData));
    this.patchFormWithData(jsonData);
  }

  private constructFormFields(formData: any[]): FormlyFieldConfig[] {
    return formData.map(item => ({
      key: item.key,
      type: item.type || 'input',
      templateOptions: {
        ...item.templateOptions,
        label: this.capitalizeFirstLetter(item.key.replace('_', ' ')),
        placeholder: `Enter your ${item.key.replace('_', ' ')}`,
        required: true,
        type: item.templateOptions.type || 'text'
      }
    }));
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  mapJsonToFormlyConfig(jsonData: any): FormlyFieldConfig[] {
    return Object.keys(jsonData).map(key => ({
      key,
      type: typeof jsonData[key] === 'number' ? 'input' : 'input',
      templateOptions: {
        required: true,
        type: typeof jsonData[key] === 'number' ? 'number' : 'text'
      }
    }));
  }

  patchFormWithData(data: any) {
    this.model = { ...this.model, ...data };
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
