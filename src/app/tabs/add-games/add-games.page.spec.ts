import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGamesPage } from './add-games.page';

describe('AddGamesPage', () => {
  let component: AddGamesPage;
  let fixture: ComponentFixture<AddGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
