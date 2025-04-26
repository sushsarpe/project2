import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-video',
  imports: [NavbarComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @ViewChild('videoPlayer') videoPlayer?: ElementRef;

  toggleVideo() {
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
    video.paused ? video.play() : video.pause();
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  @Output() navigateTo = new EventEmitter<string>();

  onNavbarNavigate(section: string) {
    this.navigateTo.emit(section);
  }
}
