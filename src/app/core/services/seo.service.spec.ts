import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  const events = new Subject();
  const router = {
    events,
    routerState: {
      snapshot: {
        root: {
          data: {
            seo: {
              title: 'Projects | Ndaruhuye',
              description: 'Selected software engineering work.',
              url: '/projects',
            },
          },
          firstChild: null,
        },
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeoService,
        Meta,
        Title,
        { provide: Router, useValue: router },
        { provide: DOCUMENT, useValue: document },
      ],
    });
  });

  afterEach(() => {
    document.head.querySelectorAll("link[rel='canonical'], link[hreflang], meta[property^='og:'], meta[name^='twitter:'], script#ndaruhuye-structured-data").forEach((element) => element.remove());
    TestBed.resetTestingModule();
  });

  it('sets canonical, social, and structured metadata', () => {
    TestBed.inject(SeoService).initialize();

    expect(document.title).toBe('Projects | Ndaruhuye');
    expect(document.head.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe('https://ndaruhuye.nexeragroup.rw/projects');
    expect(document.head.querySelector("meta[property='og:image']")?.getAttribute('content')).toBe('https://ndaruhuye.nexeragroup.rw/images/seo-card.png');
    expect(document.head.querySelector("meta[name='twitter:card']")?.getAttribute('content')).toBe('summary_large_image');
    expect(document.getElementById('ndaruhuye-structured-data')?.textContent).toContain('WebSite');
  });
});
