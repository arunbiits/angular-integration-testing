import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { UserComponent } from './user.component';

class RouterStub {
  navigate(params:any) {

  }
}

class ActivatedRouteStub {
  private subject = new Subject();

  push(obj:any) {
    this.subject.next(obj);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect user to list page after saving', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(['user']);
  });

  it('should navigate the user to not found page when id is 0', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    let route:ActivatedRouteStub = TestBed.inject(ActivatedRoute) as any;
    route.push({ id: 0 });
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });

});
