import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footerSections = [
    {
      title: 'Services',
      links: ['Graphic Design', 'Web Development', 'Engineering', 'Marketing']
    },
    {
      title: 'Resources',
      links: ['Virtual Assistance', 'Accountants', 'Bookkeepers', 'Free trial']
    },
    {
      title: 'Company',
      links: ['Partnership', 'Terms of use', 'Privacy', 'Sitemap']
    }
  ];
}
