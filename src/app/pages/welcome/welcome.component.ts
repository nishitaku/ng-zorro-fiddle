import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  date: Date = new Date();
  showModal = false;

  constructor() {}

  ngOnInit() {}

  onChange(result: Event): void {
    console.log('Selected Time: ', this.date);
  }

  handleOk(): void {
    this.showModal = false;
  }

  handleCancel(): void {
    this.showModal = false;
  }
}
