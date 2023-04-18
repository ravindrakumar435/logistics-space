import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {

    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.router.navigateByUrl('event/dashboard');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }

}
