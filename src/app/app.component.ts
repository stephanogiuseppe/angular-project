import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'joseanne-viana';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('SCROLL -> ', window.scrollY);
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
    }
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
