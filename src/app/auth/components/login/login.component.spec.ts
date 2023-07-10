import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login.component'
import { AuthService } from 'src/app/core/services/auth.service'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let spyAuthService: jasmine.SpyObj<AuthService>
  // let spyAuthService: AuthService;
  // let authService: AuthService

  beforeEach(async () => {
    spyAuthService = jasmine.createSpyObj<AuthService>("AuthService", ["login"]);

      await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: spyAuthService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule]
    }).compileComponents();


    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // authService = TestBed.inject(AuthService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
    
  it("email validator is working properly", ()=> {
    const emailValid = component.loginForm.get("email");
    expect(emailValid).toBeTruthy();
    expect(emailValid?.valid).toBeFalsy();
    emailValid?.setValue('testing@example.ru');
    expect(emailValid?.valid).toBeTruthy();
  });

  it("password validator is working properly", ()=> {
    const passwordValid = component.loginForm.get("password");
    expect(passwordValid).toBeTruthy();
    expect(passwordValid?.valid).toBeFalsy();
    passwordValid?.setValue('somepass123');
    expect(passwordValid?.valid).toBeTruthy();
    
  });

  it("должен вызывать authService.login при отправке формы",()=>{
    component.loginForm.setValue({
      email: 'testing@example.ru',
      password: 'somepass123',
      rememberMe: false,
    });
    component.onLoginSubmit();
    expect(spyAuthService.login).toHaveBeenCalled();
    expect(spyAuthService.login).toHaveBeenCalledWith({
      email: 'testing@example.ru',
      password: 'somepass123',
      rememberMe: false,
    });
  });
})
