import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
