import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms'; // <-- Use FormsModule for NgForm
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {
  constructor(private http: HttpClient) {

  }
  success=false;
  failure=false;
  submitForm(form: NgForm) {
    this.http.post('.netlify/functions/send_mail', form.value).pipe(
      map(response => {
        console.log('Form submitted successfully', response);
        this.success=true;
        // Reset the form or display a success message
      }),
      catchError(error => {
        console.error('Form submission failed', error);
        this.failure=true;
        // Handle the error or display an error message
        throw error; // Re-throw the error for further handling
      })
    ).subscribe();
    form.reset();
  }
  hide_notification(){
      this.success=false;
      this.failure=false;
  }
}
