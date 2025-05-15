import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { SectionsComponent } from "../sections/sections.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, FormsModule, HeaderComponent, SectionsComponent, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
}
