import { Component, OnInit } from '@angular/core';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { Author } from './author';
import { AuthorService } from './author.service';

@Component({
  selector: 'vex-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  icMoreVert = icMoreVert;
  author: Author[] = [];
  constructor(private service: AuthorService) { }

  ngOnInit(): void {
    this.service.getAuthors().subscribe(data => this.author = data)
  }

}
