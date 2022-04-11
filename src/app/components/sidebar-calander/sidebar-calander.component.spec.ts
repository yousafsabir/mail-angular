import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCalanderComponent } from './sidebar-calander.component';

describe('SidebarCalanderComponent', () => {
  let component: SidebarCalanderComponent;
  let fixture: ComponentFixture<SidebarCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
