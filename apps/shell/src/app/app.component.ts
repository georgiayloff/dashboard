import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@dashboard/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        if (!loggedIn) {
          console.log('must login')
          this.router.navigateByUrl('login');
        } else {
          console.log('must login done')

          this.router.navigateByUrl('');
        }
      });
  }
}
