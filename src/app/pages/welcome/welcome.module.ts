import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    FormsModule,
    WelcomeRoutingModule,
    NzDatePickerModule,
    NzModalModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
