import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

type SectionId = 'home' | 'impact' | 'projects' | 'experience' | 'capabilities' | 'contact';

interface NavigationItem {
  label: string;
  route: string;
  fragment?: SectionId;
  mobileLabel?: string;
}

const SECTION_IDS: readonly SectionId[] = [
  'home',
  'impact',
  'projects',
  'experience',
  'capabilities',
  'contact',
];

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit, OnDestroy {
  readonly theme = inject(ThemeService);

  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  readonly menuOpen = signal(false);

  readonly activeSection = signal<SectionId>('home');

  readonly currentUrl = signal('/');

  readonly navigationItems: readonly NavigationItem[] = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Projects',
      route: '/projects',
    },
    {
      label: 'Skills',
      route: '/skills',
    },
    {
      label: 'Services',
      route: '/services',
    },
    {
      label: 'Contact',
      route: '/contact',
    },
  ];

  readonly contactNavigation: NavigationItem = {
    label: 'Contact Ndaruhuye',
    mobileLabel: 'Contact',
    route: '/',
    fragment: 'contact',
  };

  readonly activeSectionLabel = computed(() =>
    this.activeSection().replace(/(^|-)\w/g, (match) => match.toUpperCase()),
  );

  private observer?: IntersectionObserver;
  private routerSubscription?: Subscription;

  toggleTheme(): void {
    this.theme.toggleMode();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setActiveSection(section: SectionId): void {
    this.activeSection.set(section);
  }

  handleNavigation(item: NavigationItem): void {
    this.closeMenu();

    if (item.fragment) {
      this.setActiveSection(item.fragment);
    }
  }

  isNavigationActive(item: NavigationItem): boolean {
    const currentPath = this.getCurrentPath();

    /*
     * Normal page route:
     * /about
     * /skills
     * etc.
     */
    if (!item.fragment) {
      return currentPath === this.normalizeRoute(item.route);
    }

    /*
     * Fragment navigation only becomes active when
     * we're actually on the item's route.
     */
    if (currentPath !== this.normalizeRoute(item.route)) {
      return false;
    }

    return this.activeSection() === item.fragment;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentUrl.set(this.router.url);

    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects);

        this.closeMenu();

        /*
         * Wait until Angular has rendered the new page
         * before searching for its sections.
         */
        requestAnimationFrame(() => {
          this.setupSectionObserver();
        });
      });

    this.setupSectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.routerSubscription?.unsubscribe();
  }

  private setupSectionObserver(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.observer?.disconnect();

    if (!this.isHomeRoute()) {
      return;
    }

    this.syncActiveSectionFromUrl();

    if (!('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection && this.isSectionId(visibleSection.target.id)) {
          this.setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -70% 0px',
        threshold: [0, 0.2, 0.5],
      },
    );

    SECTION_IDS.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        this.observer?.observe(element);
      }
    });
  }

  private syncActiveSectionFromUrl(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const fragment = window.location.hash.slice(1);

    if (this.isSectionId(fragment)) {
      this.setActiveSection(fragment);
      return;
    }

    this.setActiveSection('home');
  }

  private getCurrentPath(): string {
    const url = this.currentUrl() || this.router.url;

    const path = url.split('#')[0].split('?')[0];

    return this.normalizeRoute(path);
  }

  private normalizeRoute(route: string): string {
    if (!route || route === '/') {
      return '/';
    }

    const normalized = route.startsWith('/') ? route : `/${route}`;

    return normalized.replace(/\/+$/, '');
  }

  private isHomeRoute(): boolean {
    return this.getCurrentPath() === '/';
  }

  private isSectionId(section: string): section is SectionId {
    return SECTION_IDS.includes(section as SectionId);
  }
}
