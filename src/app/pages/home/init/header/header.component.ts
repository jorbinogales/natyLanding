import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form: any = FormGroup;
  loading: boolean = false;
  error: any;
  success: any;

  constructor(
    private readonly _headerService: HeaderService,
    private readonly _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.form = this._formBuilder.group({
      fullname: [],
      email: [],
      business: [],
      phone: [],
      state: [''],
    })
  }

  createPeople(){
    this.success =null;
    this.error = null;
    this.loading = true;
    const form = this.form.getRawValue();
    this._headerService.createPeople(form).subscribe((resp:any) =>{
      this.form.reset();
      this.success = resp;
      this.loading = false;
    }, (err) => {
      this.error = err.error.code;
      this.loading = false;
    });
  }

}
