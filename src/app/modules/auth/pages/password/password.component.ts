import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  constructor(
    private _router: Router
  ) {}

  goTo( ruta: string[] ):void {
	  this._router.navigate(ruta)
	}
}
