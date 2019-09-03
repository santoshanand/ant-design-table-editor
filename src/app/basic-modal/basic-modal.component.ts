import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html'
})
export class BasicModalComponent {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
