import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PermissionDeniedError } from '../common/permission-denied-error';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  user: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAll()
      .subscribe(data => {
        this.isLoggedIn = true;
        this.user = data.user;
      }, error => {
        if (error instanceof PermissionDeniedError) {
          this.isLoggedIn = false;
        }
      });
  }
}
