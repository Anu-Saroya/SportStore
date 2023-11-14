import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contactUs.component.html',

})
export class ContactFormComponent {
  formData: any = {};

  onSubmit() {
    console.log('Form data submitted:', this.formData);
    // You can send the form data to a backend API or perform any other action here.
  }
}
