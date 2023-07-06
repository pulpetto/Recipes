import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieListComponent } from './recipie-list.component';

describe('RecipieListComponent', () => {
  let component: RecipieListComponent;
  let fixture: ComponentFixture<RecipieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipieListComponent]
    });
    fixture = TestBed.createComponent(RecipieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
