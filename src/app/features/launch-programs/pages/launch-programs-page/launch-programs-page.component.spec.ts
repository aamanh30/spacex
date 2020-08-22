import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramsPageComponent } from './launch-programs-page.component';

describe('LaunchProgramsPageComponent', () => {
  let component: LaunchProgramsPageComponent;
  let fixture: ComponentFixture<LaunchProgramsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
