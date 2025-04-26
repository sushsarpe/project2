import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
[x: string]: any;
@Output() navigateTo = new EventEmitter<string>();

onNavigate(section: string) {
  this.navigateTo.emit(section);
}
}
