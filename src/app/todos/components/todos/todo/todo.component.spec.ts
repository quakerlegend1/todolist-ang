import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TodosService } from 'src/app/todos/services/todos.service';
import { TodoComponent } from './todo.component';
import { DomainTodo, FilterType } from 'src/app/todos/models/todos.models';


describe("TodoComponent", () => {
    let todocomponent: TodoComponent;
    let fixture: ComponentFixture<TodoComponent>;
    let spyTodosService: jasmine.SpyObj<TodosService>;
    
    beforeEach(async () => {
        
        spyTodosService = jasmine.createSpyObj<TodosService>("TodosService", ["changeFilter"]);

        await TestBed.configureTestingModule({
            declarations: [TodoComponent],
            providers: [{ provide: TodosService, useValue: spyTodosService }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            
        }).compileComponents();

        
        fixture = TestBed.createComponent(TodoComponent);
        todocomponent = fixture.componentInstance;
        todocomponent.todo = {
            id: "",
            title: "",
            addedDate: "",
            order: 0,
            filter: "all",
          }
          
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(todocomponent).toBeTruthy()
    });

    it('should call todosService changeFilter when changeFilter is called', () => {
        todocomponent.changeFilter("completed");
        expect(spyTodosService.changeFilter).toHaveBeenCalledWith("","completed");
    });

    it('should activate edit mode when activateEditModeHandler is called', () => {
        todocomponent.todo = {
            id: "string",
            title: "string",
            addedDate: "string",
            order: 1,
            filter: "active"
          };
        todocomponent.activateEditModeHandler();
        expect(todocomponent.isEditMode).toBe(true);
        expect(todocomponent.newTitle).toEqual('string');
      });
});