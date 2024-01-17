import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DisplaynameService } from '../services/displayname.service';
import { RouterTestingModule } from '@angular/router/testing';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [DisplaynameService],
      imports: [RouterTestingModule], // Import RouterTestingModule for the LoginComponent
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    const displayService = TestBed.inject(DisplaynameService);
    spyOn(displayService, 'getUsername').and.returnValue('John Doe');
    
    fixture.detectChanges();
    
    const usernameElement = fixture.nativeElement.querySelector('.right-nav a');
    expect(usernameElement.textContent).toContain('John Doe');
  });

  // Add more tests based on your component functionality

});
