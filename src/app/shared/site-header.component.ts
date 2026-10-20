import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BookingLinkComponent } from './booking-link.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [BookingLinkComponent],
  template: `
    <header class="site-header" [class.site-header--menu-open]="menuOpen">
      <a class="site-header__brand" href="#inicio" aria-label="DBS Gold Cuts, inicio">
        <span class="site-header__monogram">DBS</span>
        <span class="site-header__name">GOLD CUTS<small>BARBERÍA · BARCELONA</small></span>
      </a>
      <button class="site-header__toggle" type="button" [attr.aria-expanded]="menuOpen" aria-controls="primary-navigation" [attr.aria-label]="menuOpen ? 'Cerrar menú' : 'Abrir menú'" (click)="toggleMenu()">
        <span></span><span></span>
      </button>
      <nav id="primary-navigation" class="site-header__nav" [class.site-header__nav--open]="menuOpen" aria-label="Navegación principal">
        <div class="site-header__menu-panel">
          <a href="#servicios" (click)="navigateTo($event, 'servicios')">Servicios</a>
          <a href="#experiencia" (click)="navigateTo($event, 'experiencia')">Experiencia</a>
          <a href="#galeria" (click)="navigateTo($event, 'galeria')">Galería</a>
          <a href="#packs" (click)="navigateTo($event, 'packs')">Packs</a>
          <a href="#equipo" (click)="navigateTo($event, 'equipo')">Equipo</a>
          <a href="#opiniones" (click)="navigateTo($event, 'opiniones')">Opiniones</a>
          <a href="#contacto" (click)="navigateTo($event, 'contacto')">Contacto</a>
          <app-booking-link [fullWidth]="menuOpen">Reservar cita <span aria-hidden="true">↗</span></app-booking-link>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  private readonly document = inject(DOCUMENT);
  private bodyOverflowBeforeMenu = '';
  menuOpen = false;

  toggleMenu(): void {
    if (this.menuOpen) {
      this.closeMenu();
      return;
    }

    this.bodyOverflowBeforeMenu = this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
    this.menuOpen = true;
  }

  navigateTo(event: MouseEvent, sectionId: string): void {
    const section = this.document.getElementById(sectionId);
    if (!section) {
      return;
    }

    event.preventDefault();
    this.closeMenu();
    this.document.defaultView?.history.pushState(null, '', `#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private closeMenu(): void {
    this.menuOpen = false;
    this.document.body.style.overflow = this.bodyOverflowBeforeMenu;
    this.bodyOverflowBeforeMenu = '';
  }
}
