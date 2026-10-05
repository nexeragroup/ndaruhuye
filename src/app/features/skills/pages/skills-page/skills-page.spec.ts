import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SkillsPage } from './skills-page';
import { SkillsModule } from '../../skills-module';

describe('SkillsPage', () => {
  let component: SkillsPage;
  let fixture: ComponentFixture<SkillsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
