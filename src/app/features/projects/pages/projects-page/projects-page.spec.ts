import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsPage } from './projects-page';
import { ProjectsModule } from '../../projects-module';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lists each project once', () => {
    const ids = component.projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(component.projects.at(-1)?.title).toBe('Ndaruhuye');
  });
});
