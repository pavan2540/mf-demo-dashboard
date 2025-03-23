import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsDashboardComponent } from './user-sales-analytics.component';
import { AnalyticsService } from '../../services/analytics.service';
import { By } from '@angular/platform-browser';

describe('UserSalesAnalyticsComponent', () => {
  let component: AnalyticsDashboardComponent;
  let fixture: ComponentFixture<AnalyticsDashboardComponent>;
  let analyticsService: AnalyticsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsDashboardComponent],
      providers: [AnalyticsService]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsDashboardComponent);
    component = fixture.componentInstance;
    analyticsService = TestBed.inject(AnalyticsService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render user analytics chart', () => {
    const userChart = fixture.debugElement.query(By.css('#userAnalyticsChart'));
    expect(userChart).toBeTruthy();
  });

  it('should render sales analytics chart', () => {
    const salesChart = fixture.debugElement.query(By.css('#salesAnalyticsChart'));
    expect(salesChart).toBeTruthy();
  });

  it('should call createUserAnalyticsChart on init', () => {
    const spy = spyOn(analyticsService, 'createUserAnalyticsChart');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(component.userAnalyticsData, 'userAnalyticsChart');
  });

  it('should call createSalesAnalyticsChart on init', () => {
    const spy = spyOn(analyticsService, 'createSalesAnalyticsChart');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(component.salesAnalyticsData, 'salesAnalyticsChart');
  });
});