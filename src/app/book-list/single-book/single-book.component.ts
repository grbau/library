import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book: Book;
  bookUpdateForm: FormGroup;

  constructor(private route: ActivatedRoute, private booksService: BooksService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
        (book: Book) => {
          this.book = book;
        }
    );
    this.initForm();
  }

  initForm() {
    this.bookUpdateForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onUpdateBook() {
    const title = this.bookUpdateForm.get('title').value;
    const author = this.bookUpdateForm.get('author').value;
    const synopsis = this.bookUpdateForm.get('synopsis').value;
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    // if (this.fileUrl && this.fileUrl !== '') {
    //   newBook.photo = this.fileUrl;
    // }
    this.booksService.updateBook(this.route.snapshot.params['id'], newBook);
    this.router.navigate(['/books']);
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
