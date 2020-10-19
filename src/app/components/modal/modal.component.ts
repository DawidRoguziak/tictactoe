import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  open:boolean = false;

  constructor() { }

  openModal() {
     this.open = true;
  }


  closeModal() {
    this.open = false;
 }

}
