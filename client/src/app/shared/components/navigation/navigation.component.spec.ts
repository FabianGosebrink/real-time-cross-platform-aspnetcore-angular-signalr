import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { combineReducers, StoreModule } from '@ngrx/store';
import { AuthenticationServiceStub } from '../../../../testing/authenticationserviceMock';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { CurrentUserService } from '../../../core/services/currentUser.service';
import { StorageService } from '../../../core/services/storage.service';
import * as fromCoreStoreReducers from '../../../core/store/reducers';
import * as fromRootStore from '../../../store';
import { Configuration } from '../../configuration/app.configuration';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let fixture: ComponentFixture<NavigationComponent>;
  let comp: NavigationComponent;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRootStore.reducers,
          core: combineReducers(fromCoreStoreReducers.reducers),
        }),
      ],
      declarations: [NavigationComponent],
      providers: [
        Configuration,
        CurrentUserService,
        {
          provide: AuthenticationService,
          useClass: AuthenticationServiceStub,
        },
        StorageService,
      ],
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('component should be instanciated', () => {
    expect(comp).toBeDefined();
  });

  it('configuration should be defined', inject(
    [Configuration],
    (service: Configuration) => {
      expect(comp.configuration).toBeDefined();
    }
  ));

  it('Title is displayed correctly', inject(
    [Configuration],
    (service: Configuration) => {
      let de: DebugElement;
      let el: HTMLElement;
      de = fixture.debugElement.query(By.css('.navbar-brand'));
      el = de.nativeElement;
      expect(el.innerText).toContain(service.title);
    }
  ));
});
