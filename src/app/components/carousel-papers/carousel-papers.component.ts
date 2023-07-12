import { Component, Input, OnInit } from '@angular/core';

interface Paper {
  id?: string;
  title?: string;
  image?: string;
  linkSrc?: string;
}

@Component({
  selector: 'app-carousel-papers',
  templateUrl: './carousel-papers.component.html',
  styleUrls: ['./carousel-papers.component.scss'],
})
export class CarouselPapersComponent implements OnInit {
  papers: Paper[] = [];

  ngOnInit() {
    this.papers = [
      {
        id: '1',
        title: 'Deep Attention Recognition for Attack Identification in 5G UAV scenarios: Novel Architecture and End-to-End Evaluation',
        image: 'assets/img/job/paper1.png',
        linkSrc: 'https://arxiv.org/pdf/2303.12947.pdf',
      },
      {
        id: '2',
        title: 'Increasing Reliability on UAV Fading Scenarios',
        image: 'assets/img/job/paper2.png',
        linkSrc: 'https://ieeexplore.ieee.org/document/9706194',
      },
      {
        id: '3',
        title: 'A Synthetic Dataset for 5G UAV Attacks Based on Observable Network Parameters',
        image: 'assets/img/job/paper1.png',
        linkSrc: 'https://arxiv.org/abs/2211.09706',
      },
      {
        id: '4',
        title: 'A Scalable LDPC Coding Scheme for Adaptive HARQ Techniques',
        image: 'assets/img/job/paper1.png',
        linkSrc: 'https://ieeexplore.ieee.org/document/9860855',
      },
      {
        id: '5',
        title: 'Latent Space Transformers for Generalizing Deep Networks',
        image: 'assets/img/job/paper1.png',
        linkSrc: 'https://ieeexplore.ieee.org/document/9686099',
      },
    ];
  }
}
