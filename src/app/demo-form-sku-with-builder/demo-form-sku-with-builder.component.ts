import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  demoForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.demoForm = fb.group({
      'sku': ['ABC123']
    });
  }

  ngOnInit(): void {
  }

  // get control(){
  //   return this.demoForm.controls as FormControl;
  // }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
