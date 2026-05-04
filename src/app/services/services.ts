import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-services',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  constructor(readonly language: LanguageService) {}

  get services(): Array<{ title: string; description: string }> {
    return this.language.current() === 'es'
      ? [
          {
            title: 'Instalacion y reemplazo de A/C',
            description: 'Instalacion profesional para sistemas de enfriamiento nuevos o de reemplazo.',
          },
          {
            title: 'Reparacion de A/C',
            description: 'Diagnostico y reparacion para problemas de enfriamiento, poco flujo de aire, ruidos o fallas.',
          },
          {
            title: 'Mantenimiento preventivo',
            description: 'Mantenimiento regular para mejorar la confiabilidad, el confort y el rendimiento del sistema.',
          },
          {
            title: 'Servicio HVAC residencial',
            description: 'Soporte de enfriamiento y confort para casas, condominios, townhomes y apartamentos.',
          },
          {
            title: 'Servicio HVAC comercial',
            description: 'Servicio confiable para negocios que necesitan aire interior comodo y estable.',
          },
          {
            title: 'Servicio y mantenimiento',
            description: 'Soporte continuo para clientes que buscan un socio HVAC confiable.',
          },
        ]
      : [
          {
            title: 'A/C Installation & Replacement',
            description: 'Professional installation support for new or replacement cooling systems.',
          },
          {
            title: 'A/C Repair',
            description: 'Troubleshooting and repair for cooling issues, weak airflow, unusual noises, and system failures.',
          },
          {
            title: 'Preventive Maintenance',
            description: 'Routine maintenance that helps improve reliability, comfort, and system performance.',
          },
          {
            title: 'Residential HVAC Service',
            description: 'Cooling and comfort support for homes, condos, townhomes, and apartments.',
          },
          {
            title: 'Commercial HVAC Service',
            description: 'Dependable service for businesses that need comfortable, reliable indoor air.',
          },
          {
            title: 'Service & Maintenance',
            description: 'Ongoing support for customers who want a dependable HVAC partner.',
          },
        ];
  }
}
