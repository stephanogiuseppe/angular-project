import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'joseanne-viana';
  selectedMenuItem = 'about';

  @ViewChild('about', { static: false })
  about: ElementRef<HTMLDivElement> | undefined;
  menuActive = '';

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.about) {
      const rect = this.about.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      topShown && bottomShown ? (this.menuActive = 'about') : '';
    }
    console.log(this.menuActive);
  }

  public scroll = (el?: HTMLElement) => {
    el
      ? el.scrollIntoView({ behavior: 'smooth' })
      : window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0,
        });
  };
}
