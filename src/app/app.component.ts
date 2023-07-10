import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joseanne-viana'


  public scroll = (el?: HTMLElement) => {
    el ? el.scrollIntoView({behavior: 'smooth'}) : window.scrollTo({
    'behavior': 'smooth',
      'left': 0,
      'top': 0
    })
  }
}
