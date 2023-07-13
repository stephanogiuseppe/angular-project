import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PapersComponent } from './pages/papers/papers.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CareerComponent } from './pages/career/career.component';
import { SocialComponent } from './components/social/social.component';
import { CarouselPapersComponent } from './components/carousel-papers/carousel-papers.component';
import { CarouselVideosComponent } from './components/carousel-videos/carousel-videos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { AnimateModule } from 'primeng/animate';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

import {TreeModule} from 'primeng/tree';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PapersComponent,
    ProjectsComponent,
    CareerComponent,
    SocialComponent,
    CarouselPapersComponent,
    CarouselVideosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    GalleriaModule,
    AnimateModule,
    TagModule,
    ButtonModule,
    TreeModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
