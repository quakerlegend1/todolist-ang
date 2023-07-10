import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TaskComponent } from './task.component';
import { Task, UpdateTaskRequest } from 'src/app/todos/models/tasks.models';
import { TaskStatusEnum } from 'src/app/core/enums/taskStatus.enum';


describe("TaskComponent", () => {
    let taskcomponent: TaskComponent;
    let fixture: ComponentFixture<TaskComponent>;
    let deleteTaskSpy: jasmine.Spy;
    let changeTaskSpy: jasmine.Spy;
    let task: Task;
    beforeEach(async () => {
        
        
        await TestBed.configureTestingModule({
            declarations: [TaskComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            
        }).compileComponents();

        
        fixture = TestBed.createComponent(TaskComponent);
        taskcomponent = fixture.componentInstance;
        deleteTaskSpy = spyOn(taskcomponent.deleteTaskEvent, 'emit');
        changeTaskSpy = spyOn(taskcomponent.changeTaskEvent, 'emit');//useless
        task = {
            id: "",
            todoListId: "",
            order: 22,
            addedDate: "",
            title: "",
            description: "",
            completed: true,
            status: 55,
            priority: 2,
            startDate: "",
            deadline: ""
          };
          taskcomponent.task = task;
          fixture.detectChanges();
    });

    it("should create", () => {
        expect(taskcomponent).toBeTruthy()
    });

    it('should emit deleteTaskEvent when deleteTaskHandler is called', () => {
        taskcomponent.deleteTaskHandler();
        expect(deleteTaskSpy).toHaveBeenCalledWith(task.id)
      });
      
      it('should activate edit mode when activateEditModeHandler is called', () => {
        taskcomponent.activateEditModeHandler();
        expect(taskcomponent.editMode).toBe(true);
        expect(taskcomponent.newTitle).toEqual(task.title);
      });
      
});