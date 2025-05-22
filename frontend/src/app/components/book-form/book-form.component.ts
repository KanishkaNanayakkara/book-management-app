// src/app/components/book-form/book-form.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  bookService = inject(BookService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  book: Book = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.bookService.getBook(id).subscribe((data) => (this.book = data));
    }
  }

  onSubmit() {
    if (this.book.id) {
      this.bookService
        .updateBook(this.book.id, this.book)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.bookService
        .createBook(this.book)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
