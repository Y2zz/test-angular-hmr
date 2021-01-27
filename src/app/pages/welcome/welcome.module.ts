import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { ModalComponent } from './modal/modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule, NzModalModule],
  declarations: [WelcomeComponent, ModalComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
