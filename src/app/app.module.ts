import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PapersComponent } from './pages/papers/papers.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CareerComponent } from './pages/career/career.component';
import { SocialComponent } from './components/social/social.component';
import { PersonalImageComponent } from './components/personal-image/personal-image.component';
import { CarouselPapersComponent } from './components/carousel-papers/carousel-papers.component';
import { CarouselVideosComponent } from './components/carousel-videos/carousel-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PapersComponent,
    ProjectsComponent,
    CareerComponent,
    SocialComponent,
    PersonalImageComponent,
    CarouselPapersComponent,
    CarouselVideosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
