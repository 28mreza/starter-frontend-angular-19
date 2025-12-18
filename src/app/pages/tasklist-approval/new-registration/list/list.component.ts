import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  pagination = {
    page: 1,
    limit: 5,
    total: 5,
  };

  constructor(
    private router: Router
  ) {}

  onValidation(data: any) {
    this.router.navigate(['/tasklist-approval/new-registration/validation']);
  }

  lightcounter = 5;
  lightincrement() {
    this.lightcounter++;
  }

  lightdecrement() {
    this.lightcounter--;
  }
}
