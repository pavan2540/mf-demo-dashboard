import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

@Injectable({
  providedIn: 'root'
})
export class WebVitalsService {
  private vitalsSubject = new Subject<any>();

  constructor() {
    this.initVitals();
  }

  private initVitals() {
    onCLS((metric) => this.emitMetric('CLS', metric.value));
    onFCP((metric) => this.emitMetric('FCP', metric.value));
    onLCP((metric) => this.emitMetric('LCP', metric.value));
    onTTFB((metric) => this.emitMetric('TTFB', metric.value));
    onINP((metric) => this.emitMetric('INP', metric.value));
  }

  private emitMetric(name: string, value: number) {
    this.vitalsSubject.next({ name, value });
  }

  getVitals(): Observable<any> {
    return this.vitalsSubject.asObservable();
  }
}
