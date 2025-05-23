import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ToastComponent],
  template: `
    <div class="app-container">
      <!-- Header -->
      <header class="header">
        <div class="header-content">
          <div class="logo">
            <span class="logo-icon">📚</span>
            <span>BookManager Pro</span>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-container">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <p>&copy; 2025 BookManager Pro. Organize your library with style.</p>
      </footer>

      <!-- Toast Container -->
      <app-toast></app-toast>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent {
  title = 'book-management-system';
}