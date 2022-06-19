import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should redner total votes', () => {
    component.myVote = 1;
    component.othersVote = 20;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let ne: HTMLElement = de.nativeElement;

    expect(ne.innerText).toContain('21');
  });
  
  it('should be highlighted when the user upvotes', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.up-vote'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase the totalVotes by 1 when I click the upVote icon', () => {
    let de = fixture.debugElement.query(By.css('.up-vote'));
    de.triggerEventHandler('click',null);

    expect(component.totalVotes).not.toBe(0);
  });

});
