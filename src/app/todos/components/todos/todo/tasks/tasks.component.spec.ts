import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TodosService } from 'src/app/todos/services/todos.service';
import { TasksComponent } from './tasks.component';
import { TasksService } from 'src/app/todos/services/tasks.service';
import { of } from 'rxjs';


describe("TasksComponent", () => {
    let taskscomponent: TasksComponent;
    let fixture: ComponentFixture<TasksComponent>;
    let spyTodosService: jasmine.SpyObj<TodosService>;
    let spyTasksService: jasmine.SpyObj<TasksService>;
    
    beforeEach(async () => {
        
        spyTodosService = jasmine.createSpyObj<TodosService>("TodosService", ["todos$"]);
        spyTasksService = jasmine.createSpyObj<TasksService>("TasksService", ["getTasks","addTask","deleteTask","updateTask"]);
        await TestBed.configureTestingModule({
            declarations: [TasksComponent],
            providers: [{ provide: TodosService, useValue: spyTodosService },
                        { provide: TasksService, useValue: spyTasksService }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            
        }).compileComponents();

        
        fixture = TestBed.createComponent(TasksComponent);
        taskscomponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(taskscomponent).toBeTruthy()
    });

    it('should delete a task', () => {
        const todoId = '100';
        const taskId = '1';
        taskscomponent.todoId = todoId;
        taskscomponent.deleteTask(taskId);
        expect(spyTasksService.deleteTask).toHaveBeenCalledWith(todoId, taskId);
      });
      
      
});