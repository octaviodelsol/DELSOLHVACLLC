import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  loading = false;
  success = false;
  error = false;
  phone = '';
  // Attachment upload temporarily disabled until EmailJS subscription is enabled.
  // selectedPhotoCount = 0;

  serviceTypes: string[] = [
    'A/C Installation & Replacement',
    'A/C Repair',
    'Preventive Maintenance',
    'Residential HVAC Service',
    'Commercial HVAC Service',
    'Other'
  ];

  bedroomOptions: string[] = ['Small Area', 'Single Room', '1 System', '2 Systems', '3+ Systems', 'Not Sure'];

  timelineOptions: string[] = [
    'Standard Service',
    '48-Hour Service',
    '24-Hour Rush',
    'Flexible Timeline',
    'Emergency Service'
  ];

  propertyTypes: string[] = [
    'Single Family Home',
    'Apartment',
    'Condo / Townhome',
    'Multi-Family Property',
    'Commercial',
    'Other'
  ];

  sendQuoteRequest(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // Honeypot spam protection
    if (form.value.companyTrap) {
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'YOUR_EMAILJS_SERVICE_ID',
      'YOUR_EMAILJS_TEMPLATE_ID',
      {
        name: form.value.name,
        phone: form.value.phone,
        message:
          `Quote Request\n` +
          `Company: ${form.value.company}\n` +
          `Email: ${form.value.email}\n` +
          `Property Address: ${form.value.propertyAddress}\n` +
          `Service Type: ${form.value.serviceType}\n` +
          `System/Area Size: ${form.value.bedrooms}\n` +
          `Timeline/Urgency: ${form.value.timeline}\n` +
          `Property Type: ${form.value.propertyType}`
      },
      'YOUR_EMAILJS_PUBLIC_KEY'
    )
      .then(() => {
        this.success = true;
        form.resetForm();
        this.phone = '';
        this.navigateToSuccess();
      })
      .catch((err) => {
        console.error(err);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  // onPhotosSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement | null;
  //   this.selectedPhotoCount = input?.files?.length ?? 0;
  // }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    const formatted = this.formatPhone(input?.value ?? '');
    if (input) {
      input.value = formatted;
    }
    this.phone = formatted;
  }

  private formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 10);

    if (digits.length < 4) {
      return digits;
    }

    if (digits.length < 7) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }

    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }

  navigateToSuccess(): void {
    // Use Angular's router to navigate to the success page
    window.location.href = '#/success';
  }
}
