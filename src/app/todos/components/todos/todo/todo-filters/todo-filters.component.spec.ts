import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFiltersComponent } from './todo-filters.component';
import { FilterType } from 'src/app/todos/models/todos.models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodoFiltersComponent', () => {
  let todoFilterComponent: TodoFiltersComponent;
  let fixture: ComponentFixture<TodoFiltersComponent>;
  let changeFilterSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFiltersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFiltersComponent);
    todoFilterComponent = fixture.componentInstance;

    changeFilterSpy = spyOn(todoFilterComponent.changeFilterEvent, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(todoFilterComponent).toBeTruthy();
  });

  it('should emit changeFilterEvent when changeFilterHandler is called', () => {
    const filter: FilterType = 'completed';

    todoFilterComponent.changeFilterHandler(filter);

    expect(changeFilterSpy).toHaveBeenCalledWith(filter);
  });
});