import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  signinForm = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,20}$/)]], 
    rememberMe: '',
  });

 //signinForm: FormGroup;

 hide : boolean = true;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private  fb: FormBuilder
  ) {
   // this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
   

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  signin(){
    console.log(this.signinForm)

  }
}
