import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {
  selectedOption: any;
  showModal: boolean = false;


  constructor(private modalController: ModalController) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  openModal() {
    if (this.selectedOption) {
      this.showModal = true;
    } else {
      alert('Please select an option before opening the modal.');
    }
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted');
    this.closeModal();
  }
}




