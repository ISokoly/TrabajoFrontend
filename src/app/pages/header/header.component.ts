import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  navLinks = [
    { label: 'About', href: '#', classes: 'hover:underline' },
    { label: 'Clients', href: '#', classes: 'hover:underline' },
    { label: 'Features', href: '#', classes: 'hover:underline' },
    { label: 'Insights', href: '#', classes: 'hover:underline' },
    { label: 'Security', href: '#', classes: 'hover:underline' }
  ];
}
