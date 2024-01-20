import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from '@modules/auth/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { appIcons } from '@shared/services/data/app.icons'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorSession: boolean = false
  errorSessionText: string = ''
  
  formLogin: FormGroup = new FormGroup([])
  
  constructor(
    private _router: Router,
    private _AuthService: AuthService,
    private cookie: CookieService
  ) {}
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15)
        ])
      }
    )
  }

  goTo( ruta: string[] ):void {
	  this._router.navigate(ruta)
	}

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this._AuthService.sendLogin(email, password)
      .subscribe({
        next: response => {
          this.errorSession = false
          const { token, user } = response.data
          this.cookie.set('token', token, 4, '/')
          this.cookie.set('user_roles', user.roles, 4, '/')
          this._router.navigate(['/','dashboard'])
        },
        error: error => {
          const err = error.error.error
          this.errorSession = true
          this.errorSessionText = err
        }
      })
  }

  getIcon(name: string) {
    for (let icon of appIcons) {
      if (icon.name == name) { return icon.icon }
    }
    throw new Error('error icono')
  }
}
