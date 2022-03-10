import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit() {}

  onChange(result: Event): void {
    console.log('Selected Time: ', this.date);
  }

  onChange2(result: (Date | null)[]): void {
    console.log('Selected Time: ', this.date);
  }
}
