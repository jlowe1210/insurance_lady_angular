import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'Consultations',
  templateUrl: './Consultations.component.html',
  styleUrls: ['./Consultations.component.css'],
})
export class BookAppointmentComponent {
  constructor(private http: HttpClient) {}
  public ConsultationBooked: boolean = false;
  public booking = false;
  public serverError: boolean = false;

  public formErrors: any = {};

  public defaultService: string = 'Life Insurance';
  public defaultCategory: string = 'Insurance';
  public defaultAgent: string = 'Caroline Opurum';

  public defaultAppointmentTime: string = moment()
    .add(1, 'hours')
    .format()
    .slice(0, 16);

  public services: string[] = [
    'Life Insurance',
    'Health Insurance',
    'Dental and vision Insurance',
    'Disability Insurance',
    'Retirement plans',
    'Accident Insurance',
    'Mortgage Protection',
  ];
  handleConsultationForm(form: NgForm) {
    this.booking = true;
    const fullnameField = form.form.controls['fullname'];

    if (!fullnameField.value.trim()) {
      fullnameField.setErrors({ required: 'Name is Required' });
      this.booking = false;
      return;
    }

    if (form.valid) {
      console.log(form.value);
      this.http.post('/api/consulation/create', form.value).subscribe({
        next: (response) => {
          this.booking = false;
          this.ConsultationBooked = true;
          form.form.reset();
        },
        error: (e) => {
          this.serverError = true;
          this.ConsultationBooked = false;
        },
      });
    }
  }
}
