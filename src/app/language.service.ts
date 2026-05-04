import { Injectable, signal } from '@angular/core';

export type SiteLanguage = 'en' | 'es';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<SiteLanguage>(this.initialLanguage());

  setLanguage(language: SiteLanguage): void {
    this.current.set(language);
    localStorage.setItem('language-preference', language);
    document.documentElement.lang = language;
  }

  private initialLanguage(): SiteLanguage {
    const savedLanguage = localStorage.getItem('language-preference');
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      document.documentElement.lang = savedLanguage;
      return savedLanguage;
    }

    document.documentElement.lang = 'en';
    return 'en';
  }
}
