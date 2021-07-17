import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-validations-explicit',
  templateUrl: './demo-form-sku-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-sku-with-validations-explicit.component.css']
})
export class DemoFormSkuWithValidationsExplicitComponent implements OnInit {
  form: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.form.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit(): void {
  }

}
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
  return {invalidSku: false};
}