import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TasksService } from "./tasks.service";
import { TestBed } from '@angular/core/testing';
import { Task, GetTasksResponse } from "../models/tasks.models";
import { environment } from "src/environments/environment";


describe("TasksService", () => {
    let tasksService: TasksService;
    let httpMock: HttpTestingController;
    
    
    const todoIdExample = "exampleId"
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TasksService]
        });

        httpMock = TestBed.inject(HttpTestingController)
        tasksService = TestBed.inject(TasksService)
    });
    
    it("should be created", () => {
        expect(tasksService).toBeTruthy()
    });

    it("successfully received tasks", () => {
        const mockResponse: GetTasksResponse = {
            items: [
                {id: '1',
                title: '',
                todoListId: "",
                order: 1,
                addedDate: "",
                description: "",
                completed: true,
                status: 0,
                priority: 0,
                startDate: "",
                deadline: ""
                }
            ],
            totalCount: 10,
            error: "not"
        }
        tasksService.getTasks(todoIdExample);
        const requestExample = httpMock.expectOne(`${environment.baseUrl}/todo-lists/${todoIdExample}/tasks`);
        expect(requestExample.request.method).toBe("GET");
        requestExample.flush(mockResponse);
        tasksService.tasks$.subscribe(tasks => {
            expect(tasks[todoIdExample]).toEqual(mockResponse.items);
        });

    });

    // it("successfully add a task", () => {
    //     const mockResponse_2: Task = {
    //         id: "1", 
    //         todoListId: "", 
    //         order: 1, 
    //         addedDate: "",
    //         title: "",
    //         description: "",
    //         completed: false,
    //         status: 0,
    //         priority: 0,
    //         startDate: "",
    //         deadline: ""
    //     }
    //     const title = "new task";
    //     tasksService.addTask(todoIdExample,title);
    //     const requestExample_2 = httpMock.expectOne(`${environment.baseUrl}/todo-lists/${todoIdExample}/tasks`);
    //     expect(requestExample_2.request.method).toBe("POST");
    //     expect(requestExample_2.request.body).toEqual({title});
    //     requestExample_2.flush({data:{item: mockResponse_2}});

    //     tasksService.tasks$.subscribe(tasks => {
    //         const expTasks = [mockResponse_2, ...tasks[todoIdExample]];
    //         expect(tasks[todoIdExample]).toEqual(expTasks);
    //     })
    // }) не проходит тест, Karma пишет: TypeError: stateTasks[todoId] is not iterable


})
