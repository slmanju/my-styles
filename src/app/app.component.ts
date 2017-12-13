import {Component, TemplateRef} from '@angular/core';
import {BsDatepickerConfig, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();

  isCollapsed = false;

  bsConfig: Partial<BsDatepickerConfig>;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-orange' });
  }

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
