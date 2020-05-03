import { Injectable, EventEmitter } from '@angular/core';
import { INewsDetails } from '../common/interfaces/interfaces';
import { NewsDetails } from '../common/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsList: INewsDetails[] = [];

  newsUpdated: EventEmitter<INewsDetails[]> = new EventEmitter<INewsDetails[]>();

  constructor() {
    this.AddDefaultNews();
  }

  AddDefaultNews() {
    var news = new NewsDetails();
    news.title = "Lorem Ipsum";
    news.description = "Neque convallis a cras semper auctor neque. Elit eget gravida cum sociis.";
    news.summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed.";
    news.fullNews = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    this.newsList.unshift(news);
  }

  GetAllNews() {
    return this.newsList;
  }

  AddNewNews(newsDetails: INewsDetails) {
    this.newsList.unshift(newsDetails);
    this.newsUpdated.emit(this.newsList);
  }
}