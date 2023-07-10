import { AuthService } from './auth.service';
import { NotificationService } from 'src/app/core/services/notification.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ResultCodeEnum } from '../enums/resultCode.enum';


describe('AuthService', () => {
  let authService: AuthService;
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let router: Router;
  let notificationService: NotificationService;

  beforeEach(() => {

    const spyNotificationService = jasmine.createSpyObj("NotificationService", ["handleError", "handleSuccess"]);
    // spyNotificationService.handleError.and.returnValue();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService, { provide: NotificationService, useValue: spyNotificationService }]
    });

    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);
    notificationService = TestBed.inject(NotificationService);

  });

  afterEach(() => { httpMock.verify() });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it("on successfull login should set 'isAuth' to true and navigate to root", () => {
    const exampleLoginData = { email: "text@mail.ru", password: "password", rememberMe: false };
    authService.login(exampleLoginData);
    const exampleRequest = httpMock.expectOne(`${environment.baseUrl}/auth/login`);
    expect(exampleRequest.request.method).toBe("POST");
    exampleRequest.flush({ resultCode: ResultCodeEnum.success, data: { userId: 1 } })
    expect(authService.isAuth).toBeTrue();
    expect(notificationService.handleError).not.toHaveBeenCalled();

  });

  it("should navigate to /login on logout", () => {
    
    const response = { resultCode: ResultCodeEnum.success };
    spyOn(router, 'navigate');
    authService.logout();
    const req = httpMock.expectOne(`${environment.baseUrl}/auth/login`);
    expect(req.request.method).toBe('DELETE');
    req.flush(response);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

});

