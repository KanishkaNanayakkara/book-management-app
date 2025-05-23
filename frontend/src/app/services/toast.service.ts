import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts$ = new BehaviorSubject<Toast[]>([]);
  private idCounter = 0;

  getToasts() {
    return this.toasts$.asObservable();
  }

  showSuccess(message: string, duration = 5000) {
    this.addToast(message, 'success', duration);
  }

  showError(message: string, duration = 7000) {
    this.addToast(message, 'error', duration);
  }

  showWarning(message: string, duration = 6000) {
    this.addToast(message, 'warning', duration);
  }

  private addToast(message: string, type: Toast['type'], duration: number) {
    const toast: Toast = {
      id: ++this.idCounter,
      message,
      type,
      duration
    };

    const currentToasts = this.toasts$.value;
    this.toasts$.next([...currentToasts, toast]);

    // Auto-remove toast after duration
    setTimeout(() => {
      this.removeToast(toast.id);
    }, duration);
  }

  removeToast(id: number) {
    const currentToasts = this.toasts$.value;
    this.toasts$.next(currentToasts.filter(toast => toast.id !== id));
  }

  clearAll() {
    this.toasts$.next([]);
  }
}