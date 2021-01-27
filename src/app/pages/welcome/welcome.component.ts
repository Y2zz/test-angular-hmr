import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {}

  open(event: Event): void {
    this.modalService.create<ModalComponent>({
      nzTitle: 'test hmr',
      nzContent: ModalComponent,
    });
  }
}
