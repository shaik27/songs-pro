import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Observable';
import { SearchItem } from './searchitem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="shaik app"
   results: Observable<SearchItem[]>;
  
  constructor(private itunes: SearchService) {
  }

  doSearch(term:string) {
    this.results = this.itunes.search(term);
  }
}
