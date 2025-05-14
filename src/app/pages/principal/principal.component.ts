import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-principal',
  imports: [CommonModule, FormsModule, HeaderComponent, HeroComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

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
