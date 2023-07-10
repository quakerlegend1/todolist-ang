import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodosService } from './todos.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('TodosService', () => {
  let service: TodosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodosService],
    });
    service = TestBed.inject(TodosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should received todos', () => {
    const mockResponse = [{ id: '1', title: 'todo 1' }, { id: '2', title: 'todo 2' }];
    const expectedTodos: any[] = [{ id: '1', title: 'todo 1', filter: 'all' }, { id: '2', title: 'todo 2', filter: 'all' }]; 
    service.todos$ = new BehaviorSubject<any[]>([]); 
    service.getTodos();

    const req = httpMock.expectOne(`${environment.baseUrl}/todo-lists`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(service.todos$.value).toEqual(expectedTodos);
  });

  it('should add a new todo', () => {
    const newTodo = { id: '3', title: 'new todo' };
    const expectedTodos: any[] = [{ id: '3', title: 'new todo', filter: 'all' }]; 

    service.todos$ = new BehaviorSubject<any[]>([]); 
    service.addTodo('new todo');

    const req = httpMock.expectOne(`${environment.baseUrl}/todo-lists`);
    expect(req.request.method).toBe('POST');
    req.flush({ data: { item: newTodo } });

    expect(service.todos$.value).toEqual(expectedTodos);
  });

  it('should delete a todo', () => {
    const todoId = '1';
    const existingTodos = [
      { id: '1', title: 'todo 1', filter: 'all' },
      { id: '2', title: 'todo 2', filter: 'all' },
    ];
    const expectedTodos: any[] = [{ id: '2', title: 'todo 2', filter: 'all' }];

    service.todos$ = new BehaviorSubject<any[]>(existingTodos); 
    service.deleteTodo(todoId);

    const req = httpMock.expectOne(`${environment.baseUrl}/todo-lists/${todoId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});

    expect(service.todos$.value).toEqual(expectedTodos);
  });

});
