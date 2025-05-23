import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

interface FormErrors {
  title?: string;
  author?: string;
  isbn?: string;
  publicationDate?: string;
}

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  bookService = inject(BookService);
  toastService = inject(ToastService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  book: Book = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  errors: FormErrors = {};
  loading = false;
  isEditMode = false;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.loading = true;
      this.bookService.getBook(id).subscribe({
        next: (data) => {
          this.book = data;
          // Format date for input field
          if (this.book.publicationDate) {
            this.book.publicationDate = this.formatDateForInput(this.book.publicationDate);
          }
          this.loading = false;
        },
        error: (error) => {
          this.toastService.showError('Failed to load book details');
          this.router.navigate(['/']);
          this.loading = false;
        }
      });
    }
  }

  // Real-time validation methods for individual fields
  validateTitle() {
    if (!this.book.title?.trim()) {
      this.errors.title = 'Title is required';
    } else if (this.book.title.trim().length < 2) {
      this.errors.title = 'Title must be at least 2 characters long';
    } else {
      delete this.errors.title; // Clear the error
    }
  }

  validateAuthor() {
    if (!this.book.author?.trim()) {
      this.errors.author = 'Author is required';
    } else if (this.book.author.trim().length < 2) {
      this.errors.author = 'Author name must be at least 2 characters long';
    } else {
      delete this.errors.author; // Clear the error
    }
  }

  validateISBN() {
    if (!this.book.isbn?.trim()) {
      this.errors.isbn = 'ISBN is required';
    } else if (!this.isValidISBN(this.book.isbn.trim())) {
      this.errors.isbn = 'ISBN must be 10 to 15 characters long and contain only letters and numbers)';
    } else {
      delete this.errors.isbn; // Clear the error
    }
  }

  validatePublicationDate() {
    if (!this.book.publicationDate) {
      this.errors.publicationDate = 'Publication date is required';
    } else if (new Date(this.book.publicationDate) > new Date()) {
      this.errors.publicationDate = 'Publication date cannot be in the future';
    } else {
      delete this.errors.publicationDate; // Clear the error
    }
  }

  // Event handlers for real-time validation
  onTitleChange() {
    this.validateTitle();
  }

  onAuthorChange() {
    this.validateAuthor();
  }

  onISBNChange() {
    this.validateISBN();
  }

  onPublicationDateChange() {
    this.validatePublicationDate();
  }

  validateForm(): boolean {
    this.errors = {};
    let isValid = true;

    // Title validation
    if (!this.book.title?.trim()) {
      this.errors.title = 'Title is required';
      isValid = false;
    } else if (this.book.title.trim().length < 2) {
      this.errors.title = 'Title must be at least 2 characters long';
      isValid = false;
    }

    // Author validation
    if (!this.book.author?.trim()) {
      this.errors.author = 'Author is required';
      isValid = false;
    } else if (this.book.author.trim().length < 2) {
      this.errors.author = 'Author name must be at least 2 characters long';
      isValid = false;
    }

    // ISBN validation
    if (!this.book.isbn?.trim()) {
      this.errors.isbn = 'ISBN is required';
      isValid = false;
    } else if (!this.isValidISBN(this.book.isbn.trim())) {
      this.errors.isbn = 'Please enter a valid ISBN (10 or 13 digits)';
      isValid = false;
    }

    // Publication date validation
    if (!this.book.publicationDate) {
      this.errors.publicationDate = 'Publication date is required';
      isValid = false;
    } else if (new Date(this.book.publicationDate) > new Date()) {
      this.errors.publicationDate = 'Publication date cannot be in the future';
      isValid = false;
    }

    return isValid;
  }

  isValidISBN(isbn: string): boolean {
  // Remove hyphens and spaces
  const cleanISBN = isbn.replace(/[-\s]/g, '');

  // Allow letters and numbers, length between 10 and 15
  return /^[A-Za-z0-9]{10,15}$/.test(cleanISBN);
  }


  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  onSubmit() {
    if (!this.validateForm()) {
      this.toastService.showError('Please fix the errors before submitting');
      return;
    }

    this.loading = true;

    // Trim all string fields
    const bookData = {
      ...this.book,
      title: this.book.title.trim(),
      author: this.book.author.trim(),
      isbn: this.book.isbn.trim()
    };

    if (this.isEditMode) {
      this.bookService.updateBook(this.book.id!, bookData).subscribe({
        next: () => {
          this.toastService.showSuccess('Book updated successfully! 📚');
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toastService.showError('Failed to update book');
          this.loading = false;
        }
      });
    } else {
      this.bookService.createBook(bookData).subscribe({
        next: () => {
          this.toastService.showSuccess('Book created successfully! 🎉');
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toastService.showError('Failed to create book');
          this.loading = false;
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  hasError(field: keyof FormErrors): boolean {
    return !!this.errors[field];
  }

  getError(field: keyof FormErrors): string {
    return this.errors[field] || '';
  }
}