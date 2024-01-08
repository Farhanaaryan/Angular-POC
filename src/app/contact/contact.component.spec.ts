import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty fields', () => {
    expect(component.firstName).toEqual('');
    expect(component.lastName).toEqual('');
    expect(component.country).toEqual('india');
    expect(component.message).toEqual('');
    expect(component.isSubmitted).toBeFalse();
  });

  it('should reset fields and set isSubmitted to true on form submission', () => {
    spyOn(window, 'alert');
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.country = 'usa';
    component.message = 'Test message';
    component.OnSubmit();

    expect(component.firstName).toEqual('');
    expect(component.lastName).toEqual('');
    expect(component.country).toEqual('india');
    expect(component.message).toEqual('');
    expect(component.isSubmitted).toBeTrue();
    expect(window.alert).toHaveBeenCalledWith('Thank you for your response ');
  });

  it('should return true on canExit if there are no unsaved changes', () => {
    const result = component.canExit();
    expect(result).toBeTrue();
  });

  it('should return confirmation prompt on canExit if there are unsaved changes', () => {
    component.firstName = 'John';
    const spy = spyOn(window, 'confirm').and.returnValue(true);
    const result = component.canExit();

    expect(result).toBeTrue();
    expect(spy).toHaveBeenCalledWith('You have unsaved changes. Do you want to navigate away?');
  });

  it('should return true on canExit if there are unsaved changes but user cancels navigation', () => {
    component.firstName = 'John';
    const spy = spyOn(window, 'confirm').and.returnValue(false);
    const result = component.canExit();

    expect(result).toBeFalse();
    expect(spy).toHaveBeenCalledWith('You have unsaved changes. Do you want to navigate away?');
  });
});
