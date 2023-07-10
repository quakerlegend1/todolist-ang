import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NotifyComponent } from './notify.component'
import { NotificationService } from 'src/app/core/services/notification.service'
// import { Observable, of } from 'rxjs';



describe("NotifyComponent", () => {
    let notifycomponent: NotifyComponent;
    let fixture: ComponentFixture<NotifyComponent>;
    let spyNotificationService: jasmine.SpyObj<NotificationService>;

    beforeEach(async () => {
        spyNotificationService = jasmine.createSpyObj<NotificationService>("NotificationService", ["clear"]);

        await TestBed.configureTestingModule({
            declarations: [NotifyComponent],
            providers: [{ provide: NotificationService, useValue: spyNotificationService }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: []
        }).compileComponents();
        // spyNotificationService = jasmine.createSpyObj<NotificationService>("NotificationService", ["clear"]);
        
        fixture = TestBed.createComponent(NotifyComponent);
        notifycomponent = fixture.componentInstance;

        fixture.detectChanges();
    });

    it("should create", () => {
        expect(notifycomponent).toBeTruthy();
    });

    it("should call clear()-method  on closeNotification()", () => {
        spyNotificationService.clear();
        notifycomponent.closeNotification();
        expect(spyNotificationService.clear).toHaveBeenCalled()
    })

})