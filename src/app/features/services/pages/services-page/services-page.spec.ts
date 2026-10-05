import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesPage } from './services-page';
import { ServicesModule } from '../../services-module';

describe('ServicesPage', () => {
  let component: ServicesPage;
  let fixture: ComponentFixture<ServicesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
