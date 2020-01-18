import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonthlyStatementPage } from './monthly-statement.page';

describe('MonthlyStatementPage', () => {
  let component: MonthlyStatementPage;
  let fixture: ComponentFixture<MonthlyStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyStatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
