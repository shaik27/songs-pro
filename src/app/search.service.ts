import { Injectable } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {SearchItem} from './searchitem.model';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results:SearchItem[];
  constructor(private http: Http) {
  this.results=[];
  }

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
        .map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId);
          });
        });
  }
}
