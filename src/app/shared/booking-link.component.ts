import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-link',
  standalone: true,
  template: '<a class="booking-link" [class.booking-link--outline]="variant === \'outline\'" [class.booking-link--text]="variant === \'text\'" [class.booking-link--icon]="variant === \'icon\'" [class.booking-link--full-width]="fullWidth" [attr.aria-label]="label || null" href="https://barberstuk.wlbookings.com/" target="_blank" rel="noopener noreferrer"><ng-content /></a>',
  styleUrl: './booking-link.component.css',
})
export class BookingLinkComponent {
  @Input() variant: 'primary' | 'outline' | 'text' | 'icon' = 'primary';
  @Input() label = '';
  @Input() fullWidth = false;
}
