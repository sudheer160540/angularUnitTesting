import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidationComponent } from './formvalidation.component';
import {compute,greet,currancy} from './compute';

describe('FormvalidationComponent', () => {
  let component: FormvalidationComponent;
  let fixture: ComponentFixture<FormvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be return 0 if input is negative',()=>{
   const number=compute(-1);
   expect(number).toBe(0);
  })
  it('greet from sudheer',()=>{
expect(greet('sudheer')).toBe('welcome sudheer');
  })
  it('currency added',()=>{
    const currancyList=currancy();
    expect(currancyList).toContain('USD');
    expect(currancyList).toContain('AUD');
    expect(currancyList).toContain('EUR');
   
   //expect(greet('sudheer')).toBe('welcome sudheer');
   })
});
