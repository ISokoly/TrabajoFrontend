import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  buttons = [
    {
      text: 'Get started',
      classes: 'bg-[#4b3bff] text-white',
      icon: ''
    },
    {
      text: 'Watch video',
      classes: 'border border-[#4b3bff] text-[#4b3bff] flex items-center gap-2',
      icon: 'fas fa-play'
    }
  ];

  clientLogos = [
    { src: 'https://storage.googleapis.com/a1aa/image/cfdf6b0a-5c61-4155-2f41-4b0abd6db94c.jpg', alt: 'MeUndies logo' },
    { src: 'https://storage.googleapis.com/a1aa/image/d169b997-1e7b-4fb6-484b-3805dcd69902.jpg', alt: 'Slack logo' },
    { src: 'https://storage.googleapis.com/a1aa/image/9871e266-df3d-47fd-3223-493265a77f78.jpg', alt: 'Amazon logo' },
    { src: 'https://storage.googleapis.com/a1aa/image/c70a1909-fd1a-4969-f117-17cbeb59b82d.jpg', alt: 'WooCommerce logo' },
    { src: 'https://storage.googleapis.com/a1aa/image/4c2dfbdc-5fb5-4b62-91cd-5340a3227943.jpg', alt: 'Sitepoint logo' }
  ];

    dataCards = [
    {
      type: 'image',
      src: 'https://storage.googleapis.com/a1aa/image/9e62b377-ee63-428c-72ab-d3982a635f6a.jpg',
      alt: 'Radar chart',
      text: ''
    },
    {
      type: 'slider',
      value: 70,
      label: '70%'
    },
    {
      type: 'image',
      src: 'https://storage.googleapis.com/a1aa/image/6b0c69b8-52e9-4dd1-09de-9ad06899d868.jpg',
      alt: 'Pie chart',
      text: '20%'
    },
    {
      type: 'image',
      src: 'https://storage.googleapis.com/a1aa/image/04be3885-9e01-48d4-73d9-fd91aea51f2f.jpg',
      alt: 'Donut chart',
      text: '24/24'
    }
  ];
  
  logos = [
    { alt: 'MeUndies logo in gray', src: 'https://storage.googleapis.com/a1aa/image/cfdf6b0a-5c61-4155-2f41-4b0abd6db94c.jpg' },
    { alt: 'Slack logo in gray', src: 'https://storage.googleapis.com/a1aa/image/d169b997-1e7b-4fb6-484b-3805dcd69902.jpg' },
    { alt: 'Amazon logo in blue', src: 'https://storage.googleapis.com/a1aa/image/9871e266-df3d-47fd-3223-493265a77f78.jpg' },
    { alt: 'WooCommerce logo in gray', src: 'https://storage.googleapis.com/a1aa/image/c70a1909-fd1a-4969-f117-17cbeb59b82d.jpg' },
    { alt: 'Sitepoint logo in gray', src: 'https://storage.googleapis.com/a1aa/image/4c2dfbdc-5fb5-4b62-91cd-5340a3227943.jpg' }
  ];

  featuresContent = [
    {
      label: 'FEATURES',
      title: 'You Do the Business, We’ll Handle the Money.',
      text: 'Multiple learning courses help you stay tuned to everything that’s relevant. Respond in real-time and engage with your audience as often as you like.',
      linkText: 'Learn more about monitoring',
      linkHref: '#'
    }
  ];

  videoSection = [
    {
      label: 'SERVICES',
      title: 'Easily Control your Billing and Invoicing.',
      text: 'Officiating belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.'
    }
  ];

  services = [
    'Concept Design',
    'Concept Development',
    'Concept Implementation',
    'Testing work'
  ];

  // Datos para Card Deal
  cardDealParagraphs = [
    {
      title: '• For Innovation team',
      text: 'After brainstorming about insights, get the power to create something real. Bring your ideas to life and share your vision with concrete elements.'
    },
    {
      title: '• For Consultancies',
      text: 'Make collaboration and communication easier with your team or your client. With one tool, you can work together and keep everyone on the same page.'
    }
  ];

  cardImages = [
    {
      src: 'https://storage.googleapis.com/a1aa/image/11d37140-6895-4f83-8bed-b4dfe39c42f2.jpg',
      alt: 'Man with glasses working on laptop in front of dark blue wall'
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/5e40c1db-2615-41b0-9fb5-f03994982416.jpg',
      alt: 'Boy working on laptop wearing blue shirt'
    }
  ];

  // Datos para Testimonials
  testimonials = [
    { stars: 5, text: 'Amazing service!', name: 'John Doe', role: 'CEO' },
    { stars: 4, text: 'Very helpful team.', name: 'Jane Smith', role: 'Manager' },
    { stars: 5, text: 'I am very satisfied!', name: 'Paul Adams', role: 'Developer' },
    { stars: 4, text: 'Great experience, highly recommend!', name: 'Alice Johnson', role: 'Designer' },
    { stars: 5, text: 'Fantastic quality and speed.', name: 'Chris Lee', role: 'Marketing' },
    { stars: 3, text: 'Good, but there is room for improvement.', name: 'Sara Brown', role: 'Analyst' }
  ];

  currentIndex = 0;

  testimonialsPerPage = 3;

  showNext() {
    // Calcula el siguiente índice para los testimonios, asegurando un bucle cíclico
    this.currentIndex = (this.currentIndex + this.testimonialsPerPage) % this.testimonials.length;
  }

  // Función para mostrar el anterior set de testimonios
  showPrevious() {
    // Calcula el índice anterior, asegurando que no se caiga por debajo de 0
    this.currentIndex = (this.currentIndex - this.testimonialsPerPage + this.testimonials.length) % this.testimonials.length;
  }
}
