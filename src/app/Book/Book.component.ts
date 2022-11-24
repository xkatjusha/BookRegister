import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.css']
})
export class BookComponent implements OnInit {
  bookinformation: {title: String; author: String; published: String}

  constructor() {
    this.bookinformation = {
      title: "Mimik",
      author: "Sebastian Frizek",
      published: "Droemer",
    }, 
    {
      title: "Zur See",
      author: "Dröte Hansen",
      published: "Ponglin",
    },
    {
      title: "Eine Frage der Chemie",
      author: "Bonnie Garmus",
      published: "Piper",
    }
   }

  ngOnInit() {
  }

}
