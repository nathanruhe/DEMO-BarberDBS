import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { BookingLinkComponent } from './shared/booking-link.component';
import { SiteHeaderComponent } from './shared/site-header.component';

interface Service {
  name: string;
  description: string;
  duration: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingLinkComponent, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);

  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = (this.document.defaultView?.scrollY ?? 0) > 400;
  }

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToServices(event: MouseEvent): void {
    const servicesSection = this.document.getElementById('servicios');
    if (!servicesSection) {
      return;
    }

    event.preventDefault();
    this.document.defaultView?.history.pushState(null, '', '#servicios');
    servicesSection.scrollIntoView({ block: 'start' });
  }

  readonly services: Service[] = [
    { name: 'Corte clásico', description: 'Tijera y máquina, lavado y peinado.', duration: '30 min', price: 15 },
    { name: 'Degradado (fade)', description: 'Skin, low, mid o high fade a tu medida.', duration: '40 min', price: 18 },
    { name: 'Corte a tijera', description: 'Técnica pura de tijera para medios y largos.', duration: '45 min', price: 20 },
    { name: 'Arreglo de barba', description: 'Perfilado, navaja y aceite hidratante.', duration: '20 min', price: 10 },
    { name: 'Afeitado tradicional', description: 'Toalla caliente y navaja clásica.', duration: '30 min', price: 14 },
    { name: 'Ritual de barba completo', description: 'Toalla caliente, navaja, masaje facial y aceites.', duration: '40 min', price: 18 },
    { name: 'Corte + barba', description: 'El combo completo de la casa.', duration: '50 min', price: 25 },
    { name: 'Color / cobertura de canas', description: 'Camuflaje natural de canas, sin brillos.', duration: '45 min', price: 22 },
    { name: 'Tratamiento capilar', description: 'Hidratación profunda y masaje craneal.', duration: '30 min', price: 16 },
    { name: 'Diseño freestyle', description: 'Líneas, figuras y detalles a navaja.', duration: '50 min', price: 24 },
    { name: 'Corte infantil', description: 'Hasta 12 años.', duration: '25 min', price: 12 },
    { name: 'Padre e hijo', description: 'Dos cortes, un mismo sillón de recuerdos.', duration: '50 min', price: 24 },
  ];

  readonly experiences = [
    { title: 'Toalla caliente', description: 'Cada afeitado empieza con vapor y toalla caliente para abrir el poro.' },
    { title: 'Café o cerveza', description: 'Te recibimos con algo de beber. Aquí se viene a disfrutar.' },
    { title: 'Productos premium', description: 'Trabajamos con ceras, aceites y pomadas de barbería profesional.' },
    { title: 'Sin esperas', description: 'Con cita previa entras directo al sillón. Tu tiempo manda.' },
  ];

  readonly gallery = [
    { src: '/images/hero-D7c7A9_f.jpg', alt: 'Un barbero trabajando en un degradado en el estudio' },
    { src: '/images/g1-CXEoQQUb.jpg', alt: 'Detalle de un degradado skin fade' },
    { src: '/images/g2-VPP1c-mD.jpg', alt: 'Arreglo de barba con navaja' },
    { src: '/images/g4-CKHECQLS.jpg', alt: 'Corte texturizado con acabado natural' },
    { src: '/images/g3-D4qc6vI1.jpg', alt: 'Herramientas profesionales de barbería' },
    { src: '/images/ritual-DVUjlRiv.jpg', alt: 'Ritual de afeitado con toalla caliente y navaja' },
  ];

  readonly packs = [
    { name: 'Pack Mensual', type: 'PARA TI, CADA MES', price: '49 €', unit: '/ mes', description: 'Un corte y un arreglo de barba al mes. Tu imagen siempre a punto.', badge: 'El más popular', featured: true },
    { name: 'Pack Novio', type: 'PARA EL GRAN DÍA', price: '59 €', unit: '', description: 'Corte, ritual de afeitado, tratamiento facial y styling para el gran día.', badge: '', featured: false },
    { name: 'Pack Bienvenida', type: 'PARA EMPEZAR', price: '19 €', unit: '', description: 'Primera visita: corte, lavado y asesoría de estilo personalizada.', badge: 'Nuevos clientes', featured: false },
  ];

  readonly barbers = [
    { name: 'Álex Romero', photo: '/images/barbero-alex.jpg', specialty: 'Fundador · Especialista en fades' },
    { name: 'Dani Ortega', photo: '/images/barbero-dani.jpg', specialty: 'Barba y afeitado clásico' },
    { name: 'Marco Silva', photo: '/images/barbero-marco.jpg', specialty: 'Cortes texturizados y diseño' },
  ];

  readonly faqs = [
    { question: '¿Necesito cita previa?', answer: 'Te recomendamos reservar para poder atenderte a la hora que mejor te venga y evitar esperas.' },
    { question: '¿Cuánto dura un corte?', answer: 'El corte clásico dura aproximadamente 30 minutos y un degradado unos 40. Cada servicio indica su duración orientativa.' },
    { question: '¿Puedo elegir barbero?', answer: 'Sí. Al reservar tu cita puedes consultar la disponibilidad del equipo y elegir quién te atiende.' },
    { question: '¿Qué formas de pago aceptáis?', answer: 'Para confirmar las formas de pago disponibles, consúltanos directamente en el estudio.' },
  ];
}
