import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  match: boolean;
  valid = true;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginform.controls;
  }
login() {
  if (this.loginform.get('username').value === 'admin' && this.loginform.get('password').value === 'admin') {
    this.router.navigate(['home']);
  }

}
}
