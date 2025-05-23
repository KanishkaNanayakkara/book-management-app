import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div 
        *ngFor="let toast of toasts$ | async; trackBy: trackByFn" 
        class="toast"
        [class.success]="toast.type === 'success'"
        [class.error]="toast.type === 'error'"
        [class.warning]="toast.type === 'warning'"
      >
        <span class="toast-icon">
          {{ getIcon(toast.type) }}
        </span>
        <span class="toast-message">{{ toast.message }}</span>
        <button class="toast-close" (click)="removeToast(toast.id)">
          ✕
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
    }

    .toast {
      background: var(--white);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-hover);
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      min-width: 300px;
      animation: slideIn 0.3s ease;
      border-left: 4px solid;
    }

    .toast.success {
      border-left-color: var(--success);
    }

    .toast.error {
      border-left-color: var(--danger);
    }

    .toast.warning {
      border-left-color: var(--warning);
    }

    .toast-icon {
      margin-right: 0.75rem;
      font-size: 1.25rem;
    }

    .toast.success .toast-icon {
      color: var(--success);
    }

    .toast.error .toast-icon {
      color: var(--danger);
    }

    .toast.warning .toast-icon {
      color: var(--warning);
    }

    .toast-message {
      flex: 1;
      font-weight: 500;
    }

    .toast-close {
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      color: var(--text);
      margin-left: 1rem;
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }

    .toast-close:hover {
      opacity: 1;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .toast-container {
        top: 10px;
        right: 10px;
        left: 10px;
      }
      
      .toast {
        min-width: auto;
        width: 100%;
      }
    }
  `]
})
export class ToastComponent {
  private toastService = inject(ToastService);
  toasts$ = this.toastService.getToasts();

  getIcon(type: Toast['type']): string {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      default: return 'ℹ️';
    }
  }

  removeToast(id: number) {
    this.toastService.removeToast(id);
  }

  trackByFn(index: number, toast: Toast): number {
    return toast.id;
  }
}