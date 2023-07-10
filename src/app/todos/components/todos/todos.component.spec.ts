import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TodosComponent } from './todos.component';
import { TodosService } from '../../services/todos.service';
import { AuthService } from 'src/app/core/services/auth.service';

describe("TodosComponent", () => {
    let todoscomponent: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;
    let spyTodosService: jasmine.SpyObj<TodosService>;
    let spyAuthService: jasmine.SpyObj<AuthService>;

    beforeEach(async () => {
        spyTodosService = jasmine.createSpyObj<TodosService>("TodosService", ["getTodos", "addTodo", "deleteTodo", "updateTodoTitle"]);
        spyAuthService = jasmine.createSpyObj<AuthService>("AuthService", ["logout"]);

        await TestBed.configureTestingModule({
            declarations: [TodosComponent],
            providers: [
                { provide: TodosService, useValue: spyTodosService },
                { provide: AuthService, useValue: spyAuthService }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: []
        }).compileComponents();


        fixture = TestBed.createComponent(TodosComponent);
        todoscomponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(todoscomponent).toBeTruthy()
    })

    it("should add todo", () => {
        todoscomponent.todoTitle = 'new_todo';
        todoscomponent.addTodoHandler();
        expect(spyTodosService.addTodo).toHaveBeenCalledWith('new_todo');
        expect(todoscomponent.todoTitle).toEqual('');
    })

    it("should call logout()-method",()=> {
        todoscomponent.logoutHandler();
        expect(spyAuthService.logout).toHaveBeenCalled();
    })
});