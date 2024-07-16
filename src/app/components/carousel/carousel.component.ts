import { Component, Input, OnInit } from '@angular/core';

interface carouselImages {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImages[] = [];

  selectedIndex = 0;
  ngOnInit(): void {}
}
