import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { LanguageService } from "../language.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(readonly language: LanguageService) {}

  readonly phoneHref = "tel:+17866013264";
  readonly whatsappHref = "https://wa.me/17866013264";

  get trustItems(): Array<{ icon: string; label: string }> {
    return this.language.current() === 'es'
      ? [
          { icon: "verified_user", label: "Licenciado y asegurado" },
          { icon: "bolt", label: "Servicio el mismo dia disponible" },
          { icon: "location_on", label: "Sirviendo Miami y areas cercanas" },
          { icon: "request_quote", label: "Estimados gratis" },
        ]
      : [
          { icon: "verified_user", label: "Licensed & Insured" },
          { icon: "bolt", label: "Same-Day Service Available" },
          { icon: "location_on", label: "Serving Miami & Surrounding Areas" },
          { icon: "request_quote", label: "Free Estimates" },
        ];
  }

  get services(): Array<{ icon: string; title: string; description: string }> {
    return this.language.current() === 'es'
      ? [
          { icon: "build", title: "Reparacion de A/C", description: "Diagnostico y reparacion para restaurar el enfriamiento rapido." },
          { icon: "ac_unit", title: "Instalacion de A/C", description: "Reemplazos e instalaciones con opciones claras para su espacio." },
          { icon: "event_repeat", title: "Mantenimiento", description: "Servicio preventivo para ayudar a evitar problemas costosos." },
          { icon: "air", title: "Ductos", description: "Soporte para flujo de aire, ductos y eficiencia del sistema." },
        ]
      : [
          { icon: "build", title: "AC Repair", description: "Troubleshooting and repair to restore cooling fast." },
          { icon: "ac_unit", title: "AC Installation", description: "System replacements and installs with clear options." },
          { icon: "event_repeat", title: "Maintenance", description: "Preventive service to help avoid costly breakdowns." },
          { icon: "air", title: "Duct Work", description: "Airflow, duct, and comfort support for better performance." },
        ];
  }

  get reasons(): Array<{ icon: string; title: string; description: string }> {
    return this.language.current() === 'es'
      ? [
          { icon: "speed", title: "Respuesta rapida", description: "Priorizamos llamadas urgentes de A/C cuando el confort no puede esperar." },
          { icon: "payments", title: "Precios honestos", description: "Explicamos el trabajo y las opciones antes de avanzar." },
          { icon: "engineering", title: "Tecnicos con experiencia", description: "Servicio profesional para reparacion, instalacion y mantenimiento." },
          { icon: "home_pin", title: "Local y confiable", description: "Servicio HVAC para Miami, Hialeah y comunidades cercanas." },
        ]
      : [
          { icon: "speed", title: "Fast Response Times", description: "We prioritize urgent AC calls when comfort cannot wait." },
          { icon: "payments", title: "Honest Pricing", description: "We explain the work and your options before moving forward." },
          { icon: "engineering", title: "Experienced Technicians", description: "Professional service for repairs, installs, and maintenance." },
          { icon: "home_pin", title: "Local & Reliable", description: "HVAC support for Miami, Hialeah, and surrounding communities." },
        ];
  }

  get steps(): Array<{ title: string; description: string }> {
    return this.language.current() === 'es'
      ? [
          { title: "Llame o pida un estimado", description: "Comparta su direccion, problema y horario preferido." },
          { title: "Agendamos la visita", description: "Coordinamos una hora conveniente y confirmamos los detalles." },
          { title: "Solucionamos el problema", description: "Revisamos el sistema y realizamos el servicio aprobado." },
          { title: "Disfrute el confort", description: "Su espacio vuelve a sentirse fresco, comodo y confiable." },
        ]
      : [
          { title: "Call or Request a Quote", description: "Share your address, issue, and preferred timing." },
          { title: "Schedule Appointment", description: "We coordinate a convenient visit and confirm the details." },
          { title: "We Fix the Problem", description: "We inspect the system and complete the approved service." },
          { title: "Enjoy Comfort Again", description: "Your space gets back to feeling cool, comfortable, and reliable." },
        ];
  }
}
