import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Swiper and register web components
import { register } from 'swiper/element/bundle';
register();

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {

  images: CarouselImage[] = [
    {
      src: 'assets/images/moving1.jpg',
      alt: 'HVAC service work',
      caption: 'A/C Installation & Repair'
    },
    {
      src: 'assets/images/moving2.png',
      alt: 'HVAC maintenance support',
      caption: 'Preventive Maintenance'
    },
    {
      src: 'assets/images/moving3.jpg',
      alt: 'Residential HVAC support',
      caption: 'Residential Comfort'
    },
    {
      src: 'assets/images/moving4.jpg',
      alt: 'Commercial HVAC service',
      caption: 'Commercial HVAC Service'
    }
  ];
}
