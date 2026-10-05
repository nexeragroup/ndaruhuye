import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactChannel, ProjectTypeOption } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  readonly email = 'ndaruhuyves@gmail.com';

  readonly projectTypes: readonly ProjectTypeOption[] = [
    {
      value: 'digital-platform',
      label: 'Digital platform',
    },
    {
      value: 'software-development',
      label: 'Software development',
    },
    {
      value: 'data-ai',
      label: 'Data & AI',
    },
    {
      value: 'automation',
      label: 'Automation',
    },
    {
      value: 'architecture',
      label: 'Architecture & integration',
    },
    {
      value: 'consulting',
      label: 'Technology consulting',
    },
    {
      value: 'other',
      label: 'Something else',
    },
  ];

  readonly contactChannels: readonly ContactChannel[] = [
    {
      number: '01',
      label: 'Email',
      value: this.email,
      href: `mailto:${this.email}`,
    },
    {
      number: '02',
      label: 'Based',
      value: 'Kigali, Rwanda',
    },
    {
      number: '03',
      label: 'Timezone',
      value: 'UTC+2',
    },
  ];

  readonly contactForm: FormGroup;

  submitted = false;

  constructor(private readonly formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],

      email: ['', [Validators.required, Validators.email]],

      organization: [''],

      projectType: ['', Validators.required],

      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get projectTypeControl() {
    return this.contactForm.get('projectType');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  submitForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, organization, projectType, message } = this.contactForm.getRawValue();

    const projectTypeLabel =
      this.projectTypes.find((type) => type.value === projectType)?.label ?? projectType;

    const subject = `Project inquiry from ${name}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || 'Not provided'}`,
      `Project type: ${projectTypeLabel}`,
      '',
      'Project / message:',
      message,
    ].join('\n');

    const mailto =
      `mailto:${this.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }
}
