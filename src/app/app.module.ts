import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './Book/Book.component';
import { BooksStoreComponent } from './BooksStore/BooksStore.component';

@NgModule({
  declarations: [		
    AppComponent,
      BookComponent,
      BooksStoreComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
