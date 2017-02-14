/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestejsComponent } from './testejs.component';

describe('TestejsComponent', () => {
  let component: TestejsComponent;
  let fixture: ComponentFixture<TestejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
