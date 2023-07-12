import { Component, Input, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
 import { trigger, state, style, transition, animate } from '@angular/animations';

import {TreeNode} from 'primeng/api';

interface Paper {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
}

@Component({
  selector: 'app-carousel-papers',
  templateUrl: './carousel-papers.component.html',
  styleUrls: ['./carousel-papers.component.scss']
})
export class CarouselPapersComponent implements OnInit {

  papers: Paper[] = [];

    constructor() { }

    ngOnInit() {
        this.papers = [
          {
            id: '1',
            name: 'Project 1',
            description: 'A Systematic Dataset for 5G UAV',
            image: 'assets/img/job/paper1.png',
          },
          {
            id: '2',
            name: 'Project 2',
            description: 'Another Theme Here ',
            image: 'assets/img/job/paper2.png',
          },
          {
            id: '3',
            name: 'Project 3',
            description: 'Another Theme Here 2',
            image: 'assets/img/job/paper1.png',
          },
          {
            id: '4',
            name: 'Project 5',
            description: 'Another Theme Here 2',
            image: 'assets/img/job/paper1.png',
          },
          {
            id: '5',
            name: 'Project 5',
            description: 'Another Theme Here 2',
            image: 'assets/img/job/paper1.png',
          },
          {
            id: '6',
            name: 'Project 6',
            description: 'Another Theme Here 2',
            image: 'assets/img/job/paper1.png',
          },
          {
            id: '7',
            name: 'Project 7',
            description: 'Another Theme Here 2',
            image: 'assets/img/job/paper1.png',
          },
        ];
    }
}
