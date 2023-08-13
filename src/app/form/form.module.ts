import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    NzModalModule,
    FormsModule,
    RouterModule.forChild([{path : '', component : FormComponent}])
  ]
})
export class FormModule { }
