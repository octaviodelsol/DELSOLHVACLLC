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

  get heroPoints(): string[] {
    return this.language.current() === 'es'
      ? [
          "Instalacion, reparacion y mantenimiento preventivo de A/C",
          "Servicio HVAC residencial y comercial",
          "Precios claros, comunicacion y proximos pasos",
        ]
      : [
          "A/C installation, repair, and preventive maintenance",
          "Residential and commercial HVAC support",
          "Clear pricing, communication, and next steps",
        ];
  }

  readonly metrics = [
    { value: "A/C", label: "installation and repair service" },
    { value: "PM", label: "preventive maintenance support" },
    { value: "R+C", label: "residential and commercial work" },
  ];

  readonly proofItems = [
    {
      icon: "schedule",
      title: "Respond quickly",
      description: "Get your A/C or HVAC concern moving toward a practical solution.",
    },
    {
      icon: "verified_user",
      title: "Know what is happening",
      description: "Get clear scope, pricing, and next steps before work moves forward.",
    },
    {
      icon: "apartment",
      title: "Homes and businesses",
      description: "Support for residential comfort needs and commercial HVAC priorities.",
    },
    {
      icon: "support_agent",
      title: "Professional follow-through",
      description: "Responsive service that helps you feel informed and in control.",
    },
  ];

  readonly trustStats = [
    { value: "5.0", label: "customer-rated service experience" },
    { value: "786", label: "call 786-601-3264 for service" },
    { value: "HVAC", label: "cooling, comfort, and reliability" },
  ];

  readonly benefits = [
    {
      icon: "bolt",
      title: "Quick response when comfort is on the line",
      description: "Move from HVAC concern to action with a team focused on practical service.",
    },
    {
      icon: "chat",
      title: "Clear communication from the start",
      description: "Clear scope, communication, and next steps help you understand the work before it begins.",
    },
    {
      icon: "fact_check",
      title: "Work that supports long-term reliability",
      description: "Preventive maintenance and dependable repairs help your HVAC system perform when you need it.",
    },
  ];

  readonly sectionPoints = [
    "Comfort-focused service for homes and businesses",
    "Clear updates without constant follow-up",
    "Reliable support for urgent repairs and maintenance",
  ];

  readonly steps = [
    {
      title: "Send the system and service details",
      description:
        "Tell us the property, the HVAC service needed, and your timeline through the quote form.",
    },
    {
      title: "Review clear next steps",
      description:
        "We follow up with straightforward pricing, scope, and next steps.",
    },
    {
      title: "Get the service moving",
      description:
        "Our team handles the work so you can get back to a comfortable, reliable space.",
    },
  ];

  get services(): Array<{ icon: string; label: string }> {
    return this.language.current() === 'es'
      ? [
          { icon: "ac_unit", label: "Instalacion y reemplazo de A/C" },
          { icon: "build", label: "Reparacion y diagnostico de A/C" },
          { icon: "event_repeat", label: "Mantenimiento preventivo" },
          { icon: "home", label: "Servicio HVAC residencial" },
          { icon: "business", label: "Servicio HVAC comercial" },
        ]
      : [
          { icon: "ac_unit", label: "A/C installation and replacement" },
          { icon: "build", label: "A/C repair and troubleshooting" },
          { icon: "event_repeat", label: "Preventive maintenance" },
          { icon: "home", label: "Residential HVAC service" },
          { icon: "business", label: "Commercial HVAC service" },
        ];
  }

  readonly faqs = [
    {
      question: "Who is Del Sol HVAC LLC for?",
      answer:
        "We work with homeowners and businesses that need A/C installation, repair, preventive maintenance, or reliable HVAC support.",
    },
    {
      question: "What makes your service different?",
      answer:
        "We focus on comfort, clear communication, and dependable follow-through so customers understand the service and next steps.",
    },
  ];
}
