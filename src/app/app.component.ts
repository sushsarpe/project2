import { Component } from '@angular/core';
import { VideoComponent } from "./video/video.component";
import { ServicesComponent } from "./services/services.component";
import { PicsComponent } from "./pics/pics.component";
import { InstastripComponent } from "./instastrip/instastrip.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactusComponent } from "./contactus/contactus.component";

@Component({
  selector: 'app-root',
  imports: [VideoComponent, ServicesComponent, PicsComponent, InstastripComponent, FooterComponent, ContactusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
}
