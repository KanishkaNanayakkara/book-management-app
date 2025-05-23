import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  bookService = inject(BookService);
  toastService = inject(ToastService);
  books: Book[] = [];
  loading = false;
  deleteModalVisible = false;
  bookToDelete: number | null = null;

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.loading = true;
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
      },
      error: (error) => {
        this.toastService.showError('Failed to load books');
        this.loading = false;
      }
    });
  }

  confirmDelete(id: number) {
    this.bookToDelete = id;
    this.deleteModalVisible = true;
  }

  cancelDelete() {
    this.deleteModalVisible = false;
    this.bookToDelete = null;
  }

  deleteBook() {
    if (this.bookToDelete) {
      this.bookService.deleteBook(this.bookToDelete).subscribe({
        next: () => {
          this.toastService.showSuccess('Book deleted successfully! 🗑️');
          this.loadBooks();
          this.cancelDelete();
        },
        error: (error) => {
          this.toastService.showError('Failed to delete book');
          this.cancelDelete();
        }
      });
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  trackByFn(index: number, book: Book): number | undefined {
    return book.id;
  }
}