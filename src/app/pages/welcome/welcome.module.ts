import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [FormsModule, WelcomeRoutingModule, NzDatePickerModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
