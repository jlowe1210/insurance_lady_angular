import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'Contact',
  templateUrl: 'Contact.component.html',
  styleUrls: ['./Contact.component.css'],
})
export class ContactComponent {
  public sendingMessage: boolean = false;
  public messageSent: boolean = false;
  public serverError: boolean = false;

  constructor(private readonly http: HttpClient) {}

  public handleMessageForm(form: NgForm): void {
    if (form.valid) {
      this.sendingMessage = true;
      this.http.post('/api/message/create', form.value).subscribe({
        next: (response) => {
          this.sendingMessage = false;
          this.messageSent = true;
          form.form.reset();
        },
        error: (err) => {
          this.sendingMessage = false;
          this.serverError = true;
          form.form.reset();
        },
      });
    }
  }
}
