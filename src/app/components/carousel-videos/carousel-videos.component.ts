import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-videos',
  templateUrl: './carousel-videos.component.html',
  styleUrls: ['./carousel-videos.component.scss'],
})
export class CarouselVideosComponent {
  constructor(private sanitizer: DomSanitizer) {}

  images: any[] = [
    {
      isVideo: true,
      src: 'https://www.youtube.com/embed/rgESeln-Gnc',
      thumbnailImageSrc: 'assets/img/job/video2.png',
      title: 'UAV Reinforcement Learning',
      alt: 'UAV Reinforcement Learning Video',
    },
    {
      isVideo: true,
      src: 'https://www.youtube.com/embed/KWnNAioL1_0',
      thumbnailImageSrc: 'assets/img/job/video2.png',
      title: 'Relaying Drones in 5G Communications Systems',
      alt: 'Relaying Drones in 5G Communications Systems Video',
    }
  ];

  getSanitizerUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
