import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() navigateTo = new EventEmitter<string>();

  onNavigate(section: string) {
    this.navigateTo.emit(section);
  }
}
