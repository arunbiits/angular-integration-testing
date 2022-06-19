import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TodoComponent ],
      providers: [TodoService]
    });
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', () => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodos').and.returnValue(of([1,2,3]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  it('should call the server to add the todo', () => {
    let initialSize = component.todos.length;
    let service = TestBed.inject(TodoService);
    spyOn(service, 'add').and.returnValue(of({id:1}));

    component.add();
    fixture.detectChanges();

    expect(component.todos.length).toBe(initialSize + 1);
  });

  it('should call the server to delete the todo when the user confirms', () => {
    let service = TestBed.inject(TodoService);
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(of({}));

    component.delete(1);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete the todo when the user cancels', () => {
    let service = TestBed.inject(TodoService);
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(of({}));

    component.delete(1);
    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalledWith(1);
  });

  it('should make a call to the server asynchrounously to load todo', async() => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosAsync').and.returnValue(Promise.resolve([1,2,3]));
    
    component.loadAsync();
    fixture.detectChanges();

    fixture.whenStable().then( () => {
      expect(component.todos.length).toBe(3);
    });
  });

  it('should make a call to the server asynchrounously to load todo', fakeAsync(() => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosAsync').and.returnValue(Promise.resolve([1,2,3]));
    
    component.loadAsync();
    tick();

    expect(component.todos.length).toBe(3);
  }));

});
