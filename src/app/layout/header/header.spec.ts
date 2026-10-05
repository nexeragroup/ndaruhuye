import '@angular/compiler';
import { Injector, PLATFORM_ID, runInInjectionContext, signal } from '@angular/core';
import { Router } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { Subject } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';
import { Header } from './header';

describe('Header', () => {
  const darkMode = signal(false);
  const theme = {
    dark: darkMode.asReadonly(),
    toggleMode: () => darkMode.update((dark) => !dark),
  };

  const createHeader = (): Header => {
    const injector = Injector.create({
      providers: [
        { provide: PLATFORM_ID, useValue: 'server' },
        { provide: Router, useValue: { events: new Subject(), url: '/' } },
        { provide: ThemeService, useValue: theme },
      ],
    });

    return runInInjectionContext(injector, () => new Header());
  };

  it('opens and closes the mobile navigation', () => {
    const header = createHeader();

    expect(header.menuOpen()).toBe(false);
    header.toggleMenu();
    expect(header.menuOpen()).toBe(true);
    header.closeMenu();
    expect(header.menuOpen()).toBe(false);
  });

  it('delegates theme changes to the shared theme service', () => {
    const header = createHeader();

    expect(darkMode()).toBe(false);
    header.toggleTheme();
    expect(darkMode()).toBe(true);
  });

  it('tracks the selected portfolio section', () => {
    const header = createHeader();

    header.setActiveSection('projects');

    expect(header.activeSection()).toBe('projects');
    expect(header.activeSectionLabel()).toBe('Projects');
  });
});
