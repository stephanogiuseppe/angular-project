import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-carousel-videos',
  templateUrl: './carousel-videos.component.html',
  styleUrls: ['./carousel-videos.component.scss'],
})
export class CarouselVideosComponent {
  constructor(private sanitizer: DomSanitizer) {}

  title = 'GFG';

  images: any[] = [
    {
      isVideo: true,
      src: 'https://www.youtube.com/embed/rgESeln-Gnc',
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      isVideo: true,
      src: 'https://www.youtube.com/embed/rgESeln-Gnc',
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      isVideo: false,
      src: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      isVideo: false,
      src: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
  ];

  getSanitizerUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
